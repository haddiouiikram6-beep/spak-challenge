export const Header = () => {
    return <>
        <div className="flex justify-between items-center  w-9/12 mx-auto">
            <h1 className="text-3xl hover:text-amber-600">Spark</h1>
            <ul className="flex gap-4 items-center">
                <li className="hover:text-amber-200 cursor-pointer">Today</li>
                <li className="hover:text-amber-200 cursor-pointer">History</li>
                <li className="hover:text-amber-200 cursor-pointer">About</li>
            </ul>
        </div>
    </>
} 