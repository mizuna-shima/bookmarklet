/**
 * (c) 2025 Mizuna Shima
 * https://lanama.net/
 * 
 * このコードは、非営利目的でのみ使用可能です。
 * 再配布や改変は禁止されています。
 */

(() => {
  const uiId = "bookmarklet-form-ui";

  // 既存のUIを削除
  const existingUI = document.getElementById(uiId);
  if (existingUI) {
    existingUI.remove();
    return;
  }

  // スタイル適用のユーティリティ
  const applyStyles = (element, styles) => Object.assign(element.style, styles);

  // フォームUIの作成
  const ui = document.createElement("div");
  ui.id = uiId;
  applyStyles(ui, {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    bottom: "20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    fontSize: "13px",
    maxWidth: "90vw",
    padding: "5px",
    position: "fixed",
    right: "10px",
    zIndex: "2147483647"
  });

  // 入力フィールドの作成
  ["置換対象", "置換後"].forEach((placeholder) => {
    const input = document.createElement("input");
    applyStyles(input, {
      border: "none",
      borderBottom: "1px solid #aaa",
      fontSize: "13px",
      marginRight: "5px",
      outline: "none",
      padding: "2px",
      width: "100px"
    });
    input.type = "text";
    input.placeholder = placeholder;
    ui.appendChild(input);
  });

  // ボタン作成ヘルパー
  const createButton = (text, styles, onClick) => {
    const button = document.createElement("button");
    button.textContent = text;
    applyStyles(button, styles);
    button.onclick = onClick;
    return button;
  };

  // 置換ボタン
  const [input1, input2] = ui.querySelectorAll("input");
  ui.appendChild(
    createButton("OK", {
      backgroundColor: "#ccc",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      fontSize: "13px",
      marginRight: "5px",
      padding: "3px 8px"
    }, () => {
      const target = input1.value;
      const replacement = input2.value;
      if (!target) {
        alert("置換対象を入力してください");
        return;
      }
      replaceText(document.body, target, replacement);
      showWatermark();
    })
  );

  // 閉じるボタン
  ui.appendChild(
    createButton("×", {
      backgroundColor: "#ccc",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      fontSize: "13px",
      padding: "3px 8px"
    }, () => ui.remove())
  );

  // フォームUIを追加
  document.body.appendChild(ui);

  // ウォーターマークの表示
  const showWatermark = () => {
    const watermarkId = "watermark-indicator";
    let watermark = document.getElementById(watermarkId);
    if (!watermark) {
      watermark = document.createElement("div");
      watermark.id = watermarkId;
      watermark.textContent = "置換済み";
      applyStyles(watermark, {
        position: "fixed",
        bottom: "10px",
        left: "10px",
        fontSize: "10px",
        color: "rgba(0, 0, 0, 0.2)",
        pointerEvents: "none",
        zIndex: "2147483647",
        userSelect: "none"
      });
      document.body.appendChild(watermark);
    }
  };

  // 置換関数
  const replaceText = (element, target, replacement) => {
    if (element.nodeType === 3) {
      element.textContent = element.textContent.split(target).join(replacement);
    } else if (element.nodeType === 1 && element.childNodes) {
      element.childNodes.forEach((child) => replaceText(child, target, replacement));
    }
  };
})();
