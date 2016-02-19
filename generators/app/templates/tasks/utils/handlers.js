import util from 'gulp-util'

export const onGenericError = (error) => {
  const message = JSON.stringify({
    file: error.file,
    line: error.line,
    message: error.message
  })

  util.beep()
  util.log(util.colors.red(message))
}

export const onBrowserifyError = (error) => {
  const message = JSON.stringify({
    filename: error.filename,
    message: error.message
  })

  util.beep()
  util.log(util.colors.red(message))
}
