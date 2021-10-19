import AccountSuggest from "../content/sidebar/AccountSuggest";


export default function SuggestionSidebar() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-row pl-2">
          <p className="font-sans subpixel-antialiased text-gray-400 font-semibold">
            Suggestion for you
          </p>
          <p className="pl-36 font-sans subpixel-antialiased text-black font-semibold">
            see All
          </p>
      </div>
      <AccountSuggest />
      <AccountSuggest />
      <AccountSuggest />
      <AccountSuggest />
    </div>
  )
}
