import { createContext } from "react";
import { categorias } from '../data/categorias'
import { useState } from "react";
import { toast } from "react-toastify";

const KioscoContext = createContext();

const KioscoProvider = ({children})=>{
    
    const [categoria, setCategoria] = useState(categorias);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);

    const handleClickCategoria = (idCategoria)=>{
        const categoria_ = categorias.filter(categoria => categoria.id === idCategoria)[0];
        setCategoriaActual(categoria_);
    }

    const handleClickModal = ()=>{
        setModal(!modal);
    }

    const handleSetProducto = (producto)=>{
        setProducto(producto);
    }

    const handleAgregarPedido = ({categoria_id, imagen, ...producto})=>{
        
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado);
            toast.success('Guardado Correctamente');
        }
        else{
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido');
        }
    }

    const handleEditarCantidad = id =>{

    }

    return (
        <KioscoContext.Provider value={{
            categorias:categoria,
            categoriaActual,
            handleClickCategoria,
            modal,
            handleClickModal,
            producto,
            handleSetProducto,
            pedido,
            handleAgregarPedido,
            handleEditarCantidad
        }}>
            {children}
        </KioscoContext.Provider>
    );
}

export {
    KioscoProvider
}

export default KioscoContext