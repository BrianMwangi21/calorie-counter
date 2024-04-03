import "~style.css"

function IndexPopup() {
  return (
    <div className="flex flex-col p-8 items-center justify-center h-fit w-80">
      <p className="text-blue-500 text-2xl">
        <span className="font-bold">Calorie</span>
        <span className="underline italic">Counter</span>
      </p>
      <p className="text-black text-sm text-center">
        How much AI content have you consumed today ?
      </p>
    </div >
  )
}

export default IndexPopup
