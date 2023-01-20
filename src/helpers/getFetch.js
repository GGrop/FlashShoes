// import { addDoc, collection, getFirestore } from "firebase/firestore";

// const Productos=[
//     CATEGORIA RUNNING
//     {
//         id:'1',
//         categoria:'running',
//         name:'Nike Revolution 6 Next Nature',
//         picture1:'https://i.imgur.com/A0M5LUu.png',
//         picture2:'https://i.imgur.com/p0BSBmn.png',
//         picture3:'https://i.imgur.com/9GYnETT.png',
//         stock:15,
//         price:13499,
//         descuento:0,
//         detalle:"detalle"
//     },
//     {
//         id:'2',
//         categoria:'running',
//         name:'Adidas Coreracer Black',
//         picture1:'https://i.imgur.com/P4hxAWu.png',
//         picture2:'https://i.imgur.com/AnhWpGa.png',
//         picture3:'https://i.imgur.com/2ESbYiJ.png',
//         stock:15,
//         price:10499,
//         descuento:0,
//         detalle:"detalle"
//     },
//     {
//         id:'3',
//         categoria:'running',
//         name:'Adidas Coreracer Blue',
//         picture1:'https://i.imgur.com/zS4PHdE.png',
//         picture2:'https://i.imgur.com/KHfuZHf.png',
//         picture3:'https://i.imgur.com/0z08PfV.png',
//         stock:15,
//         price:1049,
//         descuento:0,
//         detalle:"detalle"
//     },
//     {
//         id:'4',
//         categoria:'running',
//         name:'Nike Star Runner 2',
//         picture1:'https://i.imgur.com/ZmEQOoK.png',
//         picture2:'https://i.imgur.com/cHEuXar.png',
//         picture3:'https://i.imgur.com/COSSecO.png',
//         stock:15,
//         price:11999,
//         descuento:0,
//         detalle:"detalle"
//     },
//     {
//         id:'5',
//         categoria:'running',
//         name:'Pony March Ox',
//         picture1:'https://i.imgur.com/wGmTF1c.png',
//         picture2:'https://i.imgur.com/90Am5Xj.png',
//         picture3:'https://i.imgur.com/XJ5znz9.png',
//         stock:15,
//         price:9699,
//         descuento:0.29,
//         detalle:"detalle"
//     },
//     CATEGORIA STREET
//     {
//         id:'6',
//         categoria:'street',
//         name:'Nike Air Max Sc',
//         picture1:'https://i.imgur.com/erpASof.png',
//         picture2:'https://i.imgur.com/OCV0xOO.png',
//         picture3:'https://i.imgur.com/d2xajvR.png',
//         stock:15,
//         price:17499,
//         descuento:0,
//         detalle:"detalle"
//     },
//     {
//         id:'7',
//         categoria:'street',
//         name:'Pony Since 72 Ox Canvas',
//         picture1:'https://i.imgur.com/slVMJw0.png',
//         picture2:'https://i.imgur.com/1aZ3II9.png',
//         picture3:'https://i.imgur.com/c3DRntw.png',
//         stock:15,
//         price:8499,
//         descuento:0.40,
//         detalle:"detalle"
//     },
//     {
//         id:'8',
//         categoria:'street',
//         name:'Nike Court Borough Low 2 (Psv)',
//         picture1:'https://i.imgur.com/3Km4tw9.png',
//         picture2:'https://i.imgur.com/bxigO3E.png',
//         picture3:'https://i.imgur.com/RVYNfcJ.png',
//         stock:15,
//         price:8499,
//         descuento:0,
//         detalle:"detalle"
//     },
//     {
//         id:'9',
//         categoria:'street',
//         name:'Topper Tyler',
//         picture1:'https://i.imgur.com/tSzcZ9S.png',
//         picture2:'https://i.imgur.com/BWbFuVu.png',
//         picture3:'https://i.imgur.com/N9PTOxv.png',
//         stock:15,
//         price:8199,
//         descuento:0.31,
//         detalle:"detalle"
//     },
//     ACCESORIOS
//     {
//         id:'10',
//         categoria:'accesorio',
//         name:'Pack x3 Medias Nike Everyday',
//         picture1:'https://i.imgur.com/1PO1qc3.png',
//         picture2:'https://i.imgur.com/hbGodid.png',
//         picture3:'',
//         stock:15,
//         price:800,
//         descuento:0.31,
//         detalle:"detalle"
//     },
//     {
//         id:'11',
//         categoria:'accesorio',
//         name:'Pack x3 Adidas Cush Crew',
//         picture1:'https://i.imgur.com/NwHyZJP.png',
//         picture2:'',
//         picture3:'',
//         stock:15,
//         price:800,
//         descuento:0.31,
//         detalle:"detalle"
//     },
//     {
//         id:'12',
//         categoria:'accesorio',
//         name:'Guante Dribbling Full 2.0',
//         picture1:'https://i.imgur.com/YiaHhfB.png',
//         picture2:'',
//         picture3:'',
//         stock:15,
//         price:1499,
//         descuento:0,
//         detalle:"detalle"
//     },
//     {
//         id:'13',
//         categoria:'accesorio',
//         name:'Lotto Sof Remera ',
//         picture1:'https://i.imgur.com/joKGWvm.png',
//         picture2:'https://i.imgur.com/d1DmTV7.png',
//         picture3:'',
//         stock:15,
//         price:1599,
//         descuento:0.31,
//         detalle:"detalle"
//     },
// ]

// CON ESTO MANDO TODO A LA BASE DE DATOS

// const db = getFirestore()
// const queryColection = collection(db,'productos')

// console.log(Productos)
// const SubirData=(arrayprod)=>{
//     arrayprod.map(prod=>{
//         addDoc(queryColection, prod)
//         .then(resp=>console.log(resp))
//     })
// }
// SubirData(Productos)

// CON ESTO MANDO TODO A LA BASE DE DATOS

// EJEMPLO
// const sendOrder=()=>{
//     const order={
//         buyer:{name:'pedrito', phone:'12345', email:'pedritomail'},
//         item:[{name:'bici', price:'999'}],
//         total:100
//     };
//     const db =getFirestore()
//     const orderCollection = collection(db, 'orders')
//     addDoc(orderCollection, order)
// }
// sendOrder()
// EJEMPLO

// PARA TRAER UN SOLO ITEM
//     useEffect(()=>{
//         const db = getFirestore()
//         const queryDb = doc(db, 'productos',detalleId)
//         getDoc(queryDb)
//         .then(resp=> setProducto({id:resp.id, ...resp.data()}))
//     },[])
//     console.log(producto)
// PARA TRAER UN SOLO ITEM

// export const getFetch = new Promise((res,rej)=>{
//     // const url7 = 'array';
//     // if(url7 === 'array'){
//     //     setTimeout(()=>{
//     //         res(Productos);
//     //     }, 1000)
//     // }else{
//     //     PromiseRejectionEvent('400 not found')
//     // }
// });

//     useEffect(()=>{
//         const db = getFirestore()
//         const queryColection = collection(db, 'productos')
//         // const queryFilter = query(queryColection, where('price','!=',456))
//         getDocs(queryColection)
//         .then(resp=> setProductos(
//             resp.docs.map(prod=>( {id:prod.id, ...prod.data()} ) )))
//         console.log(productos)

//     },[])

//     useEffect(()=>{
//         if(categoriaId){
//             getFetch
//             .then((respuesta)=>{
//                 return respuesta
//             })
//             .then((resp)=> setProductos(resp.filter(prod => prod.categoria === categoriaId)))
//             .catch(err => console.log(err))
//             .finally(()=> console.log('loading'))
//         }else{
//             getFetch
//             .then((respuesta)=>{
//                 return respuesta
//             })
//             .then((resp)=> setProductos(resp))
//             .catch(err => console.log(err))
//             .finally(()=> console.log('loading'))
//         }
//     }, [categoriaId])

// PARA CATEGORIAS
// useEffect(()=>{
//     const db = getFirestore()
//     const queryColection = collection(db, 'productos')
//     getDocs(queryColection)
//     .then(resp=> setProducto(resp.docs.map(prod=>( {id:prod.id, ...prod.data()} ) )))
//     .catch(err => console.log(err))
//     .finally(()=> console.log('loading'))
// },[])
// console.log(producto, 'tengo q hacer division de categorias')
// PARA CATEGORIAS

// PARA HOME (DESCUENTOS)
// useEffect(()=>{
//     const db = getFirestore()
//     const queryColection = collection(db, 'productos')
//     const queryFilter = query(queryColection, where('price','>',0))
//     getDocs(queryFilter)
//     .then(resp=> setProductos(resp.docs.map(prod=>( {id:prod.id, ...prod.data()} ) )))
//     .catch(err => console.log(err))
//     .finally(()=> console.log('loading'))
// },[])
// console.log(productos)
// PARA HOME (DESCUENTOS)

// PARA TRAER UN SOLO ITEM
// useEffect(()=>{
//     const db = getFirestore()
//     const queryDb = doc(db, 'productos','Znfp2Vt86ytd74XeAp5N')
//     getDoc(queryDb)
//     .then(resp=>
//         setProducto({id:resp.id, ...resp.data()}))
//     },[])
//     console.log(producto)
// PARA TRAER UN SOLO ITEM
