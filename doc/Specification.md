# 画面仕様書

## Top

### hero

- hero と body の境界は 3 重の波を置く
- アニメーションのためだけに押下やホバーは設定しない

### body

- 概要 / 各ページへの導線 / 製作者情報 の順
- 各ページへの導線のうち、実際にリンクする箇所はボタンにする
- 製作者情報は Twitter / GitHub アイコンのみリンクボタンにする

## Rules

- 概要 / バトル / 探索 の順
- 詳細なルールは各章の関連する項目にアコーディオンとして都度差し込む
- ルールの最後のキャラクター作成への導線を持たせる

## Character

- シート情報が含まれた URL ではメイキングではなくシートを直接表示

### Making

- シード値の取得方法は未定（シードがそれなりの期間保持するなら中断ボタン、保持しないなら戻るボタンが必要）
- メイン武器 / サブ武器 / アビリティ / 名前 の順に作成する
- 選択肢はタブ形式で表示
- 完成前に選択結果を振り返り、確認を取った上で確定する

### Sheet

- シート情報を URL に保存（シード値、名前、武器とアビリティの構成）
- シート情報が含まれた URL ではメイキングではなくシートを直接表示
- シート情報の暗号化（一般的なユーザーが URL パスから容易に任意のキャラを作成できない程度まで。コード見て復元できる人はこのリポジトリクローンしてカスタマイズできるだろうから複雑なことはしない）
- 戦闘モード: スキル使用前、性能をボタン下部に出す
- 戦闘モード: スキル使用時、コピペまたは／かつディスコードに書き出す設定
- 編集モード: 武器やアビリティ設定（横カルーセルよりメイン武器／サブ武器で切り替えられる一覧画面にしたい。 モーダルは他のスキルが見づらくなるから不採用。武器は Ult と通常で分離して最大 9 個表示にする）
- 武器スキルは通常スキル 4 つ、Ult スキル 1 つを選ぶ。ただしサブ武器の Ult は選択できない

## Story

- 戦闘 / バランス / 探索 のチェックボックスで絞り込み
- シナリオ一覧ページから詳細ページに遷移
- シナリオ一覧の上部「NPC リスト作成」または詳細ページ「NPC リスト」から NPC リストページへ
- シナリオ詳細ページでは NPC リストへ行かずとも設置された NPC カードからもアクション可能
- NPC カードは ping することで 1 つまで sticky にでできるようにする

## News

- UPDATE / NEWS チェックボックスで絞り込み
