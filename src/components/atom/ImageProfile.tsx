
interface imgProfile  {
  imgUrl : string,
  style: string,
}

export default function ImageProfile({imgUrl, style} : imgProfile) {
  return (
    <img  src={imgUrl} 
                  alt="" 
                  className={style}
                  style={{
                      cursor: 'pointer',
                      objectFit: 'cover'
                        }} />
  )
}