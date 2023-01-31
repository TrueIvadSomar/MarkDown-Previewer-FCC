

marked.setOptions({
breaks: true})

function updatePreview()
{
   let previewElement= document.getElementById("preview")
   let editorValue = document.getElementById("editor").value
   let markedUpHTML = marked(editorValue);
   previewElement.innerHTML = markedUpHTML;
}

document.onload = setDefault;


function setDefault()
{
    let defaultText = `
# H1 Text
## H2 text
[Learn more about google:](https://google.com)
<dl>
<dt>Text</dt>
<dd> Is something people use sometimes.</dd>

<dt>Markdown in HTML</dt>
<dd>Does *not* work **very** well. Use HRML <em>tags</em>.</dd>
</dl>

\` This is inline code\`

\`\`\`
function exampleOf()
{
   return multiLineCodeBlock;
}

\`\`\`


- Code
- All
- Day

> This is a block code 

![ Useful Programmer](https://pbs.twimg.com/media/ErBAK3cXEAAqJ8v.png)

**Bolded Text**`;
     let editorField = document.getElementById("editor");
     let previewElement= document.getElementById("preview")
     editorField.value= defaultText;
     previewElement.innerHTML = marked(defaultText);
}