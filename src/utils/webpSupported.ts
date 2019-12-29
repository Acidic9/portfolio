export default () => {
  const el = document.createElement('canvas')

  if (!!(el.getContext && el.getContext('2d'))) {
    // was able or not to get WebP representation
    return el.toDataURL('image/webp').indexOf('data:image/webp') == 0
  }

  // very old browser like IE 8, canvas not supported
  return false
}
