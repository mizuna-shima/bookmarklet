# 汎用名前変換ブックマークレット

任意のWebページで文字を一括置換できる軽量なブックマークレットです。  
読み手側のブラウザ上で一時的に動作するため、元のサイトのデータを変更することはありません。  
夢小説を書いたけど、制約があって名前変換機能が利用できない…といったときに使えます。

---

## 特徴
- 任意の文字を一括置換し、ブラウザ上で反映。
- 動作後に「置換済み」を示すウォーターマークを左下に表示。
- 元のコンテンツを改変することなく安全に利用可能。

---

## 使い方
1. このリポジトリ内の `bookmarklet.min.js` のコード、または以下のコードをコピーします。
2. ブラウザで新しいブックマークを作成し、以下を設定します：
   - 名前：お好きな名前（例: 文字置換ツール）
   - URL：コピーしたコードを貼り付け
3. 対象のWebページを開き、作成したブックマークをクリック。
4. 画面内右下のポップアップで「置換対象」と「置換後の文字」を入力し、「OK」を押します。

```js
javascript:(()=>{const e="bookmarklet-form-ui",t=document.getElementById(e);if(t){t.remove();return}const s=(e,t)=>Object.assign(e.style,t),n=document.createElement("div");n.id=e,s(n,{position:"fixed",bottom:"20px",right:"10px",padding:"5px",backgroundColor:"#fff",border:"1px solid #ccc",boxShadow:"0 2px 5px rgba(0,0,0,0.2)",zIndex:"2147483647",fontSize:"13px",maxWidth:"90vw"}),["置換対象","置換後"].forEach(e=>{const t=document.createElement("input");s(t,{width:"100px",marginRight:"5px",border:"none",borderBottom:"1px solid #aaa",outline:"none",padding:"2px",fontSize:"13px"}),t.type="text",t.placeholder=e,n.appendChild(t)});const o=(e,t,n)=>{const o=document.createElement("button");return o.textContent=e,s(o,t),o.onclick=n,o},i=n.querySelectorAll("input");n.appendChild(o("OK",{backgroundColor:"#ccc",color:"#fff",border:"none",padding:"3px 8px",marginRight:"5px",cursor:"pointer",fontSize:"13px"},()=>{const e=i[0].value,t=i[1].value;if(!e){alert("置換対象を入力してください");return}r(document.body,e,t),(()=>{const e="watermark-indicator";let t=document.getElementById(e);t||(t=document.createElement("div"),t.id=e,t.textContent="置換済み",s(t,{position:"fixed",bottom:"10px",left:"10px",fontSize:"10px",color:"rgba(0,0,0,0.2)",pointerEvents:"none",zIndex:"2147483647",userSelect:"none"}),document.body.appendChild(t))})()})),n.appendChild(o("×",{backgroundColor:"#ccc",color:"#fff",border:"none",padding:"3px 8px",cursor:"pointer",fontSize:"13px"},()=>n.remove())),document.body.appendChild(n);const r=(e,t,n)=>{e.nodeType===3?e.textContent=e.textContent.split(t).join(n):e.nodeType===1&&e.childNodes&&e.childNodes.forEach(s=>r(s,t,n))}})();
```

---

## ライセンス
このコードのライセンスは [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/deed.ja) です。

1. **表示**（Attribution）  
   - 必ず原著作者「Mizuna Shima」または「Lanama」をクレジット表記してください。
2. **改変しての再配布は禁止**  
   - このコードを改変して利用することはできません。  
   - 改変なしでそのまま再配布する場合は許可されます。
3. **商用利用可**  
   - このコードは商用目的で使用することが可能です。
4. **免責事項**  
   - このコードおよび説明に保証はありません。
   - 利用にあたって発生した損害やトラブルについて、作成者（Mizuna Shima）は一切の責任を負いません。
   - 使用後のトラブルや不具合についてのサポートは行っておりません。

---

### 注意点
1. **JavaScriptが無効なブラウザでは使用不可**  
   - ブラウザでJavaScriptが無効化されている場合、このツールは動作しません。
2. **動作確認済み環境**  
   - **iOS**: Chrome、Safari
   - **Android**: Firefox（Chromeは動作せず）
   - **MacOS**: Chrome、Safari
   - **Windows**: Chrome
5. **その他**  
   - 夢小説作品として発表していない作品には使用しない等、使用箇所は慎重に判断してください。

