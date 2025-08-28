function decodeFilename(filename: string): string {
  let underLine = filename.indexOf('_')+1
  let lastDot = filename.lastIndexOf('.')

  let finalFilename = filename.slice(underLine, lastDot)

  

    return finalFilename;
  }
