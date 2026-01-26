const Dashboard = () => {
    return(
        <main className="pt-5 px-5">
            <div className="bg-blue-500 text-white px-10 py-5 rounded-2xl border-2">
                <h1 className="text-xl">User Name : @<span className="font-bold text-shadow-purple-500 text-amber-200">Masum5000</span></h1>
                <h1 className="mt-2 text-3xl">Balance : $<span className="font-bold">500,000</span></h1>
            </div>
            <div className="flex gap-10 justify-center text-white pt-8">
                <h1 className="bg-red-600 py-2 w-40 text-center text-xl rounded-xl cursor-pointer hover:bg-red-800">Cash Out <span className="fa fa-money-bill-transfer"/></h1>

                <h1 className="bg-amber-600 py-2 w-40 text-center text-xl rounded-xl cursor-pointer hover:bg-amber-800">Send Money <span className="fa fa-paper-plane"/></h1>
            </div>
        </main>
    )
}
export default Dashboard;