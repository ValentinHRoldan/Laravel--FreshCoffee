import { createContext } from "react";
import { categorias } from '../data/categorias'
import { useState } from "react";

const KioscoContext = createContext();

const KioscoProvider = ({children})=>{
    
    const [categoria, setCategoria] = useState(categorias);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);

    const handleClickCategoria = (idCategoria)=>{
        const categoria_ = categorias.filter(categoria => categoria.id === idCategoria)[0];
        setCategoriaActual(categoria_);
    }

    const handleClickModal = ()=>{
        setModal(!modal);
    }

    return (
        <KioscoContext.Provider value={{
            categorias:categoria,
            categoriaActual,
            handleClickCategoria,
            modal,
            handleClickModal
        }}>
            {children}
        </KioscoContext.Provider>
    );
}

export {
    KioscoProvider
}

export default KioscoContext