export default function copy() {
  for (let i = 0; i < document.getElementsByTagName('code').length; i++) {
    // item.setAttribute('data-prismjs-copy', 'Copy');
    console.log(document.getElementsByTagName('code')[i]);
  }
}
