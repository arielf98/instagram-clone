
interface imgProfile  {
  imgUrl : string,
  styles: string,
}

export default function ImageProfile({imgUrl, styles} : imgProfile) {
  return (
      <img  src={imgUrl} 
                    alt="" 
                    className={styles} />
    )
}