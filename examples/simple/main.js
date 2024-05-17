// @ts-check
const { parseEpub } = require('../../lib')

parseEpub('../../fixtures/classroom.epub').then((result) => {
  //   console.log('result object has keys: ', Object.keys(result))
  console.log('book info', result.info)
  console.log('book styles', result.styles)
  //   console.log('book structure', result.structure)
  //   console.log('the book has', result.sections.length, 'sections')
  //   console.log('here is first section')

  const showSection = (idx) => {
    // console.log(`-------- section index ${idx} --------`)
    // console.log(result.sections[idx])
    // console.log('toMarkdown')
    // console.log(result.sections[idx].toMarkdown())
    // console.log('toHtmlObjects')
    const htmlObjects = result.sections[idx].toHtmlObjects()
    // console.log(JSON.stringify(htmlObjects[3].children[1].children[1], null, 2))
    // console.log('result', JSON.stringify(result._nav.html.body, null, 2))
    console.log('result', result.info)

    // console.log(JSON.stringify(htmlObjects[0], null, 2))
  }

  //   showSection(6)
  showSection(1)

  // this section contains images which are converted to base64
  // showSection(4)
})
