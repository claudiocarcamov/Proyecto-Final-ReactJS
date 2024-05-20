import CategoryList from "./CategoryList";
import CartWidget from "./CartWidget"

function NavBar(){
    return(
        <div>
            <CategoryList />
            <CartWidget />
        </div>
    )
}

export default NavBar;