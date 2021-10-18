import  ImageProfile  from "../../atom/ImageProfile"


export default function FeedCard() {

  const feedCardStyle:string = 'bg-white w-full h-60 mt-5'
  const feedHeader: string = "w-full h-14 border border-gray-200 flex flex-row content-center	items-center pl-3"
  const feedAccount: string = "w-9 h-9 rounded-full bg-black"


  return (
    <div className={feedCardStyle}>
      <div className={feedHeader}>
        <div className={feedAccount}>
          <ImageProfile 
            imgUrl="https://source.unsplash.com/daily"
            style={feedAccount} />
        </div>
        <div className="pl-2 ">
            ini adalah nama akun
        </div>
        <div className="pl-64">
            icon
        </div>
      </div>
    </div>
  )
}
