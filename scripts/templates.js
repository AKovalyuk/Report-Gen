const buttonAddParagraph = '<div title="Абзац"onclick="addParagraph(); showButtons(event.currentTarget.parentElement);"><svg class="add-button" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="3.01067" fill="white"/><path d="M17.8143 5.37918V26.656H16.9354V5.37918H14.6527V26.656H13.7616V13.9241C12.2072 13.859 11.0435 13.6555 10.2704 13.3138C9.50543 12.9638 8.91949 12.4308 8.51259 11.7146C8.10569 10.9903 7.90224 10.1806 7.90224 9.28543C7.90224 8.39025 8.0772 7.65783 8.42714 7.08817C8.89914 6.30692 9.52577 5.71691 10.307 5.31815C11.0964 4.91124 12.1259 4.70779 13.3954 4.70779H19.4379V5.37918H17.8143Z" fill="#858585"/></svg></div>';
const buttonAddSection = '<div title="Раздел" onclick="addSection(); showButtons(event.currentTarget.parentElement);"><svg class="add-button" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="3.01067" fill="white"/><path d="M13.3521 10.532C12.8068 9.92974 12.4162 9.38042 12.1802 8.884C11.9523 8.38758 11.8384 7.88303 11.8384 7.37033C11.8384 6.41818 12.172 5.60845 12.8394 4.94113C13.5067 4.26568 14.3286 3.92795 15.3052 3.92795C16.2004 3.92795 16.9368 4.20057 17.5146 4.74582C18.1006 5.29107 18.3936 5.91363 18.3936 6.61349C18.3936 6.93088 18.2878 7.21164 18.0762 7.45578C17.9215 7.62668 17.7059 7.71213 17.4292 7.71213C17.1525 7.71213 16.9246 7.61854 16.7456 7.43137C16.5666 7.24419 16.4771 7.02446 16.4771 6.77219C16.4771 6.65012 16.5096 6.43446 16.5747 6.12521C16.6154 5.93804 16.6357 5.76307 16.6357 5.60031C16.6357 5.26665 16.5177 4.98996 16.2817 4.77023C16.0457 4.55051 15.7202 4.44064 15.3052 4.44064C14.7111 4.44064 14.2065 4.64816 13.7915 5.0632C13.3846 5.47824 13.1812 5.9828 13.1812 6.57687C13.1812 7.09771 13.291 7.52902 13.5107 7.87082C13.877 8.44048 14.4914 9.03863 15.354 9.66525C16.9897 10.8453 18.1087 11.9032 18.7109 12.8391C19.1341 13.5064 19.3457 14.2063 19.3457 14.9387C19.3457 15.6793 19.13 16.4198 18.6987 17.1604C18.2674 17.9009 17.5838 18.552 16.6479 19.1135C17.2176 19.7401 17.6082 20.2813 17.8198 20.737C18.0396 21.1928 18.1494 21.6851 18.1494 22.2141C18.1494 23.2069 17.8158 24.037 17.1484 24.7043C16.4811 25.3716 15.6592 25.7053 14.6826 25.7053C13.8037 25.7053 13.0713 25.4245 12.4854 24.863C11.9076 24.3096 11.6187 23.6749 11.6187 22.9587C11.6187 22.6576 11.7122 22.4013 11.8994 22.1897C12.0947 21.9862 12.3185 21.8845 12.5708 21.8845C12.8231 21.8845 13.0387 21.9781 13.2178 22.1653C13.3968 22.3606 13.4863 22.621 13.4863 22.9465C13.4863 23.1662 13.4538 23.4063 13.3887 23.6667C13.3236 23.9353 13.291 24.1387 13.291 24.2771C13.291 24.5131 13.3927 24.7084 13.5962 24.863C13.9136 25.1071 14.3001 25.2292 14.7559 25.2292C15.3011 25.2292 15.7935 25.0176 16.2329 24.5945C16.6805 24.1713 16.9043 23.7115 16.9043 23.2151C16.9043 22.7105 16.7782 22.2588 16.5259 21.8601C16.1353 21.2497 15.4272 20.558 14.4019 19.7849C12.8719 18.6456 11.8302 17.6405 11.2769 16.7697C10.8618 16.1106 10.6543 15.4107 10.6543 14.6701C10.6543 13.9214 10.874 13.1849 11.3135 12.4607C11.7529 11.7282 12.4325 11.0853 13.3521 10.532ZM13.7427 10.9104C12.5138 11.6509 11.8994 12.5543 11.8994 13.6203C11.8994 14.19 12.05 14.7149 12.3511 15.195C12.7743 15.8542 13.5758 16.6314 14.7559 17.5266C15.3255 17.9579 15.8219 18.3689 16.2451 18.7595C17.4902 18.0027 18.1128 17.1075 18.1128 16.0739C18.1128 15.545 17.9338 14.9957 17.5757 14.426C17.2176 13.8482 16.4811 13.1239 15.3662 12.2531C14.6989 11.7404 14.1577 11.2929 13.7427 10.9104Z" fill="#858585"/></svg></div>';
const buttonAddImage = '<div title="Рисунок" onclick="addImage(); showButtons(event.currentTarget.parentElement);"><svg class="add-button" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="3.01067" fill="white"/><rect x="5" y="5" width="20" height="2" fill="#858585"/><rect x="5" y="23" width="20" height="2" fill="#858585"/><rect x="5" y="25" width="20" height="2" transform="rotate(-90 5 25)" fill="#858585"/><rect x="23" y="25" width="20" height="2" transform="rotate(-90 23 25)" fill="#858585"/><path d="M14.1299 12.0049L14 11.7799L13.8701 12.0049L7.80792 22.5049L7.67801 22.7299H7.93782H20.0622H20.322L20.1921 22.5049L14.1299 12.0049Z" fill="#858585" stroke="white" stroke-width="0.3"/><path d="M18.5315 16.5219L18.4016 16.2969L18.2717 16.5219L14.8076 22.5219L14.6777 22.7469H14.9375H21.8657H22.1256L21.9956 22.5219L18.5315 16.5219Z" fill="#858585" stroke="white" stroke-width="0.3"/><circle cx="19.9016" cy="10.5799" r="1.5" fill="#858585"/></svg></div>';
const buttonAddFormula = '<div title="Формула" onclick="addFormula(); showButtons(event.currentTarget.parentElement);"><svg class="add-button" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="3.01067" fill="white"/><path d="M7.89062 6.94727H20.3052L20.6348 11.1099H20.1709C20.1139 10.2879 19.9756 9.6613 19.7559 9.22998C19.5361 8.79053 19.235 8.47314 18.8525 8.27783C18.4701 8.08252 17.8638 7.98486 17.0337 7.98486H11.3818L16.4233 14.4546L10.686 21.2295H16.9727C18.112 21.2295 18.9827 21.0464 19.585 20.6802C20.1872 20.314 20.6388 19.549 20.9399 18.3853L21.4038 18.4951L20.6958 23.5H7.89062V23.0605L14.2627 15.541L7.89062 7.38672V6.94727Z" fill="#858585"/></svg></div>';
const buttonAddEnumeration = '<div title="Перечисление" onclick="addEnumeration(); showButtons(event.currentTarget.parentElement);"><svg class="add-button" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="3.01067" fill="white"/><rect x="9" y="22.347" width="16" height="3" fill="#858585"/><rect x="5" y="22.347" width="3" height="3" fill="#858585"/><rect x="5" y="4.653" width="3" height="3" fill="#858585"/><rect x="5" y="13.5" width="3" height="3" fill="#858585"/><rect x="9" y="4.653" width="16" height="3" fill="#858585"/><rect x="9" y="13.5" width="16" height="3" fill="#858585"/></svg></div>';
const buttonAddTable = '<div title="Таблица" onclick="addTable(); showButtons(event.currentTarget.parentElement); upd();"><svg class="add-button" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="3.01067" fill="white"/><rect x="5" y="23" width="20" height="2" fill="#858585"/><rect x="5" y="14" width="20" height="2" fill="#858585"/><rect x="5" y="5" width="20" height="2" fill="#858585"/><rect x="5" y="25" width="20" height="2" transform="rotate(-90 5 25)" fill="#858585"/><rect x="14" y="25" width="20" height="2" transform="rotate(-90 14 25)" fill="#858585"/><rect x="23" y="25" width="20" height="2" transform="rotate(-90 23 25)" fill="#858585"/></svg></div>';
const buttonAddCodeSnippet = '<div title="Листинг" onclick="addCodeSnippet(); showButtons(event.currentTarget.parentElement);"><svg class="add-button" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="3.01067" fill="white"/><path d="M5.61914 15.2858L10.6289 17.0524V19.5133L3.06152 16.3053V14.2311L10.6289 11.0231V13.484L5.61914 15.2858ZM13.5205 21.8161H11.6309L16.3418 7.92057H18.2314L13.5205 21.8161ZM24.6387 15.2594L19.5322 13.4753V11.0319L27.1875 14.2399V16.3053L19.5322 19.5221V17.07L24.6387 15.2594Z" fill="#858585"/></svg></div>';
const buttonFromPaste = '<div title="Из буфера" onclick="fromPaste(); showButtons(event.currentTarget.parentElement); upd();"><svg class="add-button" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="3.01067" fill="white"/><path d="M15 23.6305L8.0718 16.1305H21.9282L15 23.6305Z" fill="#858585"/><rect x="13" y="6.36946" width="4" height="10" fill="#858585"/></svg></div>';
const miniToolbarButtonCopy = '<svg onclick="copyEditorElement();" class="mini-toolbar-button" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="5" fill="#D3D3D3"/><rect x="5.25143" y="3.25082" width="10.5" height="14.5" fill="#D3D3D3" stroke="#858585" stroke-width="1.5"/><rect x="8.24857" y="6.24918" width="10.5" height="14.5" fill="#D3D3D3" stroke="#858585" stroke-width="1.5"/></svg>'
const miniToolbarButtonCut = '<svg onclick="cutEditorElement();upd();" class="mini-toolbar-button" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="5" fill="#D3D3D3"/><circle cx="6.63992" cy="17.36" r="2.5" transform="rotate(-45 6.63992 17.36)" stroke="#858585"/><path d="M7.10687 14.7717L18.4206 3.45801L17.7135 8.40776L9.22819 16.893L7.10687 14.7717Z" fill="#858585"/><circle r="2.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16.2426 17.36)" stroke="#858585"/><path d="M15.7756 14.7717L4.4619 3.45802L5.16901 8.40777L13.6543 16.893L15.7756 14.7717Z" fill="#858585"/></svg>'
const miniToolbarButtonRemove = '<svg onclick="deleteEditorElement();upd();" class="mini-toolbar-button" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="5" fill="#D3D3D3"/><rect x="3.6915" y="6.16637" width="3.5" height="20" rx="1.75" transform="rotate(-45 3.6915 6.16637)" fill="#858585"/><rect x="17.8336" y="3.69149" width="3.5" height="20" rx="1.75" transform="rotate(45 17.8336 3.69149)" fill="#858585"/></svg>'
const miniToolbar = '<div class="mini-toolbar">' + miniToolbarButtonCopy + miniToolbarButtonCut + miniToolbarButtonRemove + '</div>'
const paragraph = '<div class="paragraph editor-element">' + miniToolbar + '<textarea class="paragraph-text sourcable" onkeydown="squareBracketHandler();" onblur="CacheWriter.paragraph(event.target.parentElement);dumpValue(); upd();"></textarea></div>';
const section = '<div class="section"><div class="heading editor-element"><div class="mini-toolbar">' + miniToolbarButtonRemove + '</div><button class="roll-up" onclick="rollUp();">▼</button><textarea class="heading-text sourcable" onkeydown="squareBracketHandler();" onblur="dumpValue();CacheWriter.section(event.target.parentElement.parentElement);upd();"></textarea></div><div class="content-container"><div class="v-line"></div><div class="section-content"><div class="insert" onclick="showButtons();" onmouseleave="hideButtons();"></div></div></div>';
const insert = '<div class="insert" onclick="showButtons();" onmouseleave="hideButtons();"></div>';
const codeSnippet = '<div class="code-snippet editor-element">' + miniToolbar + '<textarea placeholder="Название листинга" class="code-snippet-caption sourcable" onkeydown="squareBracketHandler();" onblur="dumpValue();CacheWriter.codeSnippet(event.target.parentElement);upd();"></textarea><textarea placeholder="Паста javascript здесь" class="code-snippet-text" spellcheck=false onblur="dumpValue();CacheWriter.codeSnippet(event.target.parentElement);upd();"></textarea></div>'
const enumerationElement = '<textarea class="enumeration-text sourcable" placeholder="- ..." onkeydown="squareBracketHandler();" onblur="CacheWriter.enumeration(event.target.parentElement);upd();enumerationOnblur();dumpValue();"></textarea>'
const enumeration = '<div class="enumeration editor-element">' + miniToolbar + enumerationElement + '</div>'
const tableCell = '<textarea class="table-cell" onkeydown="tableCellKeyframeHandler();" onmousedown="tableCellOnMouseDown();" onblur="dumpValue();"></textarea>'
const image = '<div class="image editor-element">' + miniToolbar + '<img class="image-preview" onerror="onUncorrectImage();CacheWriter.image(event.target.parentElement);upd();" onload="CacheWriter.image(event.target.parentElement);upd();"></img><input class="image-load" type="file" accept="image/jpeg,image/jpg,image/png,.png,.jpg,.jpeg" onchange="onImageLoad();"><button class="image-remove" onclick="removeImage();CacheWriter.image(event.target.parentElement);upd();">X</button><textarea placeholder="Название рисунка" class="image-caption-text sourcable" onkeydown="squareBracketHandler();" onblur="dumpValue();CacheWriter.image(event.target.parentElement);upd();"></textarea></div>'
const table = 
`<div class="table editor-element">
    `+ miniToolbar + `
    <textarea class="table-caption sourcable" onkeydown="squareBracketHandler();" onblur="CacheWriter.table(event.target.parentElement);dumpValue();upd();" placeholder="Название таблицы"></textarea>
    <button class="button-open-table-editor" onclick="openTableEditor();">Открыть редактор</button>
    <div class="table-editor" hidden>
        <div class="table-area">
            <div class="table-column" style="width: 40%;">
                <div class="table-column-tools">
                    <button class="button-delete-column" onclick="removeTableColumn();" title="Удалить столбец">x</button>
                    <button class="button-adjust-column" onclick="increaseTableColumn();" title="Расширить столбец">+</button>
                    <button class="button-adjust-column" onclick="decreaseTableColumn();" title="Сузить столбец">-</button>
                </div>` + 
                tableCell + 
                tableCell +`
            </div>
            <div class="table-column" style="width: 40%;">
                <div class="table-column-tools">
                    <button class="button-delete-column" onclick="removeTableColumn();">x</button>
                    <button class="button-adjust-column" onclick="increaseTableColumn();">+</button>
                    <button class="button-adjust-column" onclick="decreaseTableColumn();">-</button>
                </div> `
                + tableCell + 
                tableCell + `
            </div>
        </div>
        <div class="table-editor-hint">Добавить ячейки:<br><span class="keyframe">Аlt</span> + <span class="keyframe">→</span><span class="keyframe">←</span><span class="keyframe">↑</span><span class="keyframe">↓</span><br>Удалить строку:<br><span class="keyframe">Alt</span> + <span class="keyframe">Del</span></div>
        <button class="table-editor-apply" onclick="CacheWriter.table(event.target.parentElement.parentElement);escapeTableEditor();upd();">Применить</button>
    </div>
</div>`
const formula = '<div class="formula editor-element">' + miniToolbar + '<textarea placeholder="Формула (LaTeX)" class="formula-text" onblur="renderFormulaPreview();dumpValue();"></textarea></div>'
//const oldTable = '<div class="table editor-element">' + miniToolbar + '<textarea class="table-caption"  onblur="dumpValue();"></textarea><button class="button-open-table-editor" onclick="openTablEditor();">Открыть редактор</button><div class="table-editor" hidden><div class="table-area" data-widths="50,50"><div class="table-row"><textarea class="table-cell" onmousedown="table_cell_onmousedown();"></textarea><textarea class="table-cell" onmousedown="table_cell_onmousedown();"></textarea></div><div class="table-row"><textarea class="table-cell" onmousedown="table_cell_onmousedown();"></textarea><textarea class="table-cell" onmousedown="table_cell_onmousedown();"></textarea></div></div><button class="table-editor-apply" onclick="escapeTableEditor();">Применить</button></div></div>'
const source = `<div class="source editor-element" style="margin-top: 8px;">
<select class="dropdown" style="display: inline-block; width: 50%;" onchange="dumpSelectValue();changeSourceType(event);mapSourceToPreview(event.target.parentElement);CacheWriter.source(event.target.parentElement);upd();">
    <option name="raw">Ввести вручную</option>
    <option name="book" selected>Книга</option>
</select>
` + miniToolbarButtonRemove + `
<div class="source-types-container">
    <div name="raw" hidden>
        <textarea class="paragraph-text" name="text" onblur="mapSourceToPreview(event.target.parentElement.parentElement.parentElement);CacheWriter.source(event.target.parentElement.parentElement.parentElement);upd();"></textarea>
    </div>
    <div name="book">
        <textarea class="form-textarea" rows="1" name="title" placeholder="Название книги" onblur="mapSourceToPreview(event.target.parentElement.parentElement.parentElement);CacheWriter.source(event.target.parentElement.parentElement.parentElement);upd();"></textarea>
        <textarea class="form-textarea" rows="1" name="authors" placeholder="Авторы через запятую (Иванов И. И., Сидоров С.С.)" onblur="mapSourceToPreview(event.target.parentElement.parentElement.parentElement);CacheWriter.source(event.target.parentElement.parentElement.parentElement);upd();"></textarea>
        <textarea class="form-textarea" rows="1" name="company" placeholder="Организация (необязательно)" onblur="mapSourceToPreview(event.target.parentElement.parentElement.parentElement);CacheWriter.source(event.target.parentElement.parentElement.parentElement);upd();"></textarea>
        <textarea class="form-textarea" rows="1" name="genre" placeholder="Тип/жанр и т.д. монография/учебник (необязательно)" onblur="mapSourceToPreview(event.target.parentElement.parentElement.parentElement);CacheWriter.source(event.target.parentElement.parentElement.parentElement);upd();"></textarea>
        <textarea class="form-textarea" rows="1" name="city" placeholder="Город издания" onblur="mapSourceToPreview(event.target.parentElement.parentElement.parentElement);CacheWriter.source(event.target.parentElement.parentElement.parentElement);upd();"></textarea>
        <textarea class="form-textarea" rows="1" name="publisher" placeholder="Издательство" onblur="mapSourceToPreview(event.target.parentElement.parentElement.parentElement);CacheWriter.source(event.target.parentElement.parentElement.parentElement);upd();"></textarea>
        <textarea class="form-textarea" rows="1" name="year" placeholder="Год" onblur="mapSourceToPreview(event.target.parentElement.parentElement.parentElement);CacheWriter.source(event.target.parentElement.parentElement.parentElement);upd();"></textarea>
        <textarea class="form-textarea" rows="1" name="pages" placeholder="Страниц" onblur="mapSourceToPreview(event.target.parentElement.parentElement.parentElement);CacheWriter.source(event.target.parentElement.parentElement.parentElement);upd();"></textarea>
        <textarea class="form-textarea" rows="1" name="publication" placeholder="Издание (необязательно)" onblur="mapSourceToPreview(event.target.parentElement.parentElement.parentElement);CacheWriter.source(event.target.parentElement.parentElement.parentElement);upd();"></textarea>
        <textarea class="form-textarea" rows="1" name="series" placeholder="Серия (необязательно)" onblur="mapSourceToPreview(event.target.parentElement.parentElement.parentElement);CacheWriter.source(event.target.parentElement.parentElement.parentElement);upd();"></textarea>
    </div>
</div>
<div class="source-preview"></div>
</div>`
