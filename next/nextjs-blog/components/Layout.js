import LayoutStyle from '../components_style/Layout.module.css';
import Link from "next/link";
const Layout = () => {
    return (
        <div className={LayoutStyle.flex}>
           
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>
                <Link href="/rust">Rust</Link>
            </div>
            <div>
                <Link href="/js_code">Javascript</Link>
            </div>
        </div>
    )
}
export default Layout
