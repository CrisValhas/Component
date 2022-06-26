import "./Styles/Searchbar.css"
import { FaHeart,FaHSquare,FaAndroid,FaSistrix} from "react-icons/fa";
import {FcGraduationCap} from "react-icons/fc"

export default function Searchbar() {

    return (
        <div className="body">
            <div className="Appicon">
                <FcGraduationCap className="Logo"/>
            </div>
            <form className="Nav">
                <label>
                    <input className="Search" type="text" placeholder="Search..."/>
                </label>
                <button className="button"><FaSistrix /></button>
                <div>
                    <label>Tag 1</label>
                        <select className="select" >
                            <option defaultValue='disabled' ></option>
                            <option >option 1</option>
                            <option >option 2</option>
                            <option >option 3</option>
                            <option >option 4</option>
                        </select>
                </div>
                <div>
                    <label>Tag 2</label>
                        <select className="select" >
                            <option defaultValue='disabled' ></option>
                            <option >option 1</option>
                            <option >option 2</option>
                            <option >option 3</option>
                            <option >option 4</option>
                        </select>
                </div>
                <div>
                    <label>Tag 3</label>
                        <select className="select" >
                            <option defaultValue='disabled' ></option>
                            <option >option 1</option>
                            <option >option 2</option>
                            <option >option 3</option>
                            <option >option 4</option>
                        </select>
                </div>
                <div className="segment">
                    <button className="button"><FaHeart /></button>
                    <button className="button"><FaHSquare /></button>
                    <button className="button"><FaAndroid /></button>
                </div>
            </form>
        </div>
    )
}