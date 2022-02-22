import React from "react";
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css"

export default function Biblioteca(){
    return(
        <div className="Biblio">
            <Header /> 
            <List />
            <Footer />
        </div>
    )
}