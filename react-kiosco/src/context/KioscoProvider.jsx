import { createContext } from "react";
import { categorias } from '../data/categorias'
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import clienteAxios from "../../config/axios";

const KioscoContext = createContext();

const KioscoProvider = ({children})=>{
    
    const [categoria, setCategoria] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const nuevoTotal = pedido.reduce((total, producto_) => total + (producto_.precio * producto_.cantidad), 0);
        setTotal(nuevoTotal);
    }, [pedido])

    const obtenerCategorias = async ()=>{
        try{
            const {data} = await clienteAxios('/api/categorias');
            setCategoria(data.data);
            // setCategoriaActual(data.data[0]);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        obtenerCategorias();
    })

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

    const handleAgregarPedido = ({categoria_id, ...producto})=>{
        
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
        const productoActualizar = pedido.filter(producto => producto.id === id)[0];
        setProducto(productoActualizar);
        setModal(!modal);
    }

    const handleEliminarProducto = id =>{
        const pedidoActualizar = pedido.filter(producto => producto.id !== id);
        setPedido(pedidoActualizar);        
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
            handleEditarCantidad,
            handleEliminarProducto,
            total,
        }}>
            {children}
        </KioscoContext.Provider>
    );
}

export {
    KioscoProvider
}

export default KioscoContext