export const Liste = () => {
    return (
    <div className="flex justify-center items-center mt-4 ">
        <ul className="flex gap-7 items-center">
        <li className="border rounded  w-15 text-center bg-amber-200 hover:text-amber-300 cursor-pointer">Tous</li>
<li className="border rounded  w-15 text-center bg-amber-200 hover:text-amber-300 cursor-pointer">Créatif</li>
<li className="border rounded  w-20 text-center bg-amber-200 hover:text-amber-300 cursor-pointer"> Bien-etre</li>
<li className="border rounded  w-25 text-center bg-amber-200 hover:text-amber-300 cursor-pointer">Défis sociaux</li>
</ul>
    </div>
    );
}