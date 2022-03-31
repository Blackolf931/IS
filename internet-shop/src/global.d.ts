declare module '*.jpg' {
  export default '' as string;
}
declare module '*.png' {
  export default '![](static/defaultImages/ImageNotFound.png)' as string;
}
