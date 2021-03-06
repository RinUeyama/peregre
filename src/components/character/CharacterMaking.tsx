import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import { color, space } from 'src/assets/style'
import { INITIAL_WEAPON } from 'src/constants'
import {
  abilityListAtom,
  allAbilityListAtom,
  allWeaponListAtom,
  isMakingFinishedAtom,
  mainWeaponAtom,
  nameAtom,
  subWeaponAtom,
} from 'src/data/atom'
import { IAbility, IWeapon } from 'src/interfaces'
import { randomizeXorShift } from 'src/utils/Math'
import { ButtonBase } from '../actor/button/ButtonBase'
import {
  getAbilityFromDirtyData,
  getWeaponFromDirtyData,
} from 'src/utils/Mapper'

export interface ICharacterMakingProps {}

// TODO 文言は constants > words とかにいれたほうがいい？
const WORDS = {
  question: {
    weaponMain: 'Main Weapon',
    weaponSub: 'Sub Weapon',
    ability: 'Abilities',
    name: 'Name',
  },
  button: {
    next: '次へ',
    back: '戻る',
    finish: '　作成完了！',
  },
  cancel: {
    annotation:
      'キャラクター作成を中断しても、24時間は同じ武器／アビリティ構成で作成が再開されます。中断しますか？',
  },
} as const

const STEPS = ['weaponMain', 'weaponSub', 'ability', 'name'] as const

export const CharacterMaking: React.VFC<ICharacterMakingProps> = () => {
  /**
   * シード
   */
  const seed = /** TODO */ 1111
  const getRD = (i: number): number => randomizeXorShift(seed + i)

  // 武器テーブル作成
  const weaponsData = useRecoilValue(allWeaponListAtom)
  const weaponsTable: IWeapon[] = [...Array(4)].map((_, i) => {
    const dirtyData = weaponsData[getRD(i) % weaponsData.length]
    return getWeaponFromDirtyData(dirtyData)
  })

  // アビリティテーブル作成
  const abilitiesData = useRecoilValue(allAbilityListAtom)
  const abilitiesTable: IAbility[] = [...Array(10)].map((_, i) => {
    const dirtyData = abilitiesData[getRD(i) % abilitiesData.length]
    return getAbilityFromDirtyData(dirtyData, i)
  })

  /**
   * 各質問に応じた制御
   */
  const [currentStepIndex, setCurrentStepIndex] = React.useState<number>(0)
  const [currentAbilityStep, setCurrentAbilityStep] = React.useState<number>(0)

  // 2pick用タプル
  const choiceItems:
    | [IAbility, IAbility][]
    | [IWeapon, IWeapon][] = React.useMemo(() => {
    switch (STEPS[currentStepIndex]) {
      case 'weaponMain':
        return [[weaponsTable[0], weaponsTable[1]]]
      case 'weaponSub':
        return [[weaponsTable[2], weaponsTable[3]]]
      case 'ability':
        return [...Array(5)].map((_, i) => [
          abilitiesTable[i * 2],
          abilitiesTable[i * 2 + 1],
        ])
      default:
        return [[INITIAL_WEAPON, INITIAL_WEAPON]]
    }
  }, [currentStepIndex, weaponsTable, abilitiesTable])

  const [isFirstIndex, setIsFirstIndex] = React.useState<boolean>(true)
  const handleChoice = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsFirstIndex(e.currentTarget.value === 'first')
  }

  const setMainWeapon = useSetRecoilState(mainWeaponAtom)
  const setSubWeapon = useSetRecoilState(subWeaponAtom)
  const setAbilities = useSetRecoilState(abilityListAtom)
  const setName = useSetRecoilState(nameAtom)
  const setIsMakingFinished = useSetRecoilState(isMakingFinishedAtom)

  const handleClickToNextStep = () => {
    switch (STEPS[currentStepIndex]) {
      case 'weaponMain':
        setMainWeapon(weaponsTable[isFirstIndex ? 0 : 1])
        setIsFirstIndex(true)
        setCurrentStepIndex((prev) => prev + 1)
        return
      case 'weaponSub':
        setSubWeapon(weaponsTable[isFirstIndex ? 2 : 3])
        setIsFirstIndex(true)
        setCurrentStepIndex((prev) => prev + 1)
        return
      // アビリティは5回選択する必要がある
      case 'ability':
        if (currentAbilityStep === 0) {
          setAbilities([abilitiesTable[isFirstIndex ? 0 : 1]]) // 1回目のみアビリティリストを選択したアビリティで初期化
          setCurrentAbilityStep((prev) => prev + 1)
          setIsFirstIndex(true)
        } else if (currentAbilityStep === 4) {
          setAbilities((prev) => [
            ...prev,
            abilitiesTable[
              isFirstIndex ? currentAbilityStep * 2 : currentAbilityStep * 2 + 1
            ],
          ])
          setCurrentAbilityStep(0) // 意図しない参照バグを防止
          setIsFirstIndex(true)
          setCurrentStepIndex((prev) => prev + 1) // 5回目のみ次のステップ（名前入力）へ移行
        } else {
          setAbilities((prev) => [
            ...prev,
            abilitiesTable[
              isFirstIndex ? currentAbilityStep * 2 : currentAbilityStep * 2 + 1
            ],
          ])
          setCurrentAbilityStep((prev) => prev + 1)
          setIsFirstIndex(true)
        }
        return
      case 'name':
        setIsMakingFinished(true)
        return
    }
  }

  const buttonLabel =
    currentStepIndex === STEPS.length - 1
      ? WORDS.button.finish
      : WORDS.button.next

  return (
    <CharacterMakingWrapper>
      <QuestionHeading>
        {WORDS.question[STEPS[currentStepIndex]]}
      </QuestionHeading>
      {STEPS[currentStepIndex] !== 'name' && (
        <>
          <ChoiceCardArea>
            <ChoiceCard>
              <ButtonBase
                onClick={handleChoice}
                value="first"
                lighten={!isFirstIndex}
              >
                {choiceItems[currentAbilityStep][0].name}
              </ButtonBase>
            </ChoiceCard>
            <ChoiceCard>
              <ButtonBase
                onClick={handleChoice}
                value="second"
                lighten={isFirstIndex}
              >
                {choiceItems[currentAbilityStep][1].name}
              </ButtonBase>
            </ChoiceCard>
          </ChoiceCardArea>
          <ChoiceDescription>
            {choiceItems[currentAbilityStep][isFirstIndex ? 0 : 1].description}
          </ChoiceDescription>
        </>
      )}
      {STEPS[currentStepIndex] === 'name' && (
        <NameInputField
          placeholder="名前を入力"
          onChange={(e) => setName(e.currentTarget.value)}
        />
      )}
      <NextButton>
        <ButtonBase onClick={handleClickToNextStep}>{buttonLabel}</ButtonBase>
      </NextButton>
      {/** TODO 戻るボタン */}
      {/** TODO 中断ボタン */}
    </CharacterMakingWrapper>
  )
}

const CharacterMakingWrapper = styled.div`
  max-width: 90%;
  min-width: 60%;
  min-height: 84vh;
  margin: 0 auto;
  text-align: center;
`
const QuestionHeading = styled.h2`
  font-size: calc(0.5rem + 3.6vmin);
  line-height: 1.8;
  margin: ${space.s} auto;
`
const ChoiceCardArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
// ページ固有のコンポーネントなので現状は切り出していない
const ChoiceCard = styled.div`
  min-width: 180px;
  margin: 0 ${space.xs};
  margin-top: ${space.xs};
  border-radius: 40px;
`
const ChoiceDescription = styled.p`
  margin-top: ${space.s};
  padding: calc(1rem + 2.4vmin);
  display: block;
  border-radius: 14px;
  color: ${color.fontInHighContrast};
  background-color: ${color.backgroundHighContrast};
  text-align: start;
  line-height: 1.5;
  min-height: 80px;
`
const NameInputField = styled.input`
  display: block;
  box-sizing: border-box;
  margin: ${space.m} auto;
  padding: calc(1rem + 1.4vmin);
  background-color: inherit;
  border: 0;
  font-size: 1.5rem;
  text-align: center;
`
const NextButton = styled.div`
  max-width: 240px;
  margin: 0 auto;
  margin-top: calc(2rem + 2.3vh);
  border-radius: 40px;
  font-size: 6rem;
`
