import { useEffect, useState } from 'react';
import userApi from '../../api/userApi';
import { Product } from '../../models'
const AddProduct = () => {
    const [name, setName] = useState('')
    const [CPU, setCPU] = useState('')
    const [ram, setRam] = useState('')
    const [hardDrive, setHardDrive] = useState('')
    const [card, setCard] = useState('')
    const [operatingSystem, setOperatingSystem] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const handleUserClick = () => {
        const product: Product = {
            name: name,
            CPU: CPU,
            ram: ram,
            hardDrive: hardDrive,
            card: card,
            operatingSystem: operatingSystem,
            img: img,
            price: Number(price),
            category: category
        }
        console.log(product)
    }
    return (
        <div className="container">

            <div className="mb-3 w-25">
                <label className="form-label">Tên sản phẩm</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3 w-25">
                <label className="form-label">CPU</label>
                <input type="text" className="form-control" value={CPU} onChange={(e) => setCPU(e.target.value)} />
            </div>
            <div className="mb-3 w-25">
                <label className="form-label">Ram</label>
                <input type="text" className="form-control" value={ram} onChange={(e) => setRam(e.target.value)} />
            </div>
            <div className="mb-3 w-25">
                <label className="form-label">HardDrive</label>
                <input type="text" className="form-control" value={hardDrive} onChange={(e) => setHardDrive(e.target.value)} />
            </div>
            <div className="mb-3 w-25">
                <label className="form-label">Card</label>
                <input type="text" className="form-control" value={card} onChange={(e) => setCard(e.target.value)} />
            </div>

            <div className="mb-3 w-25">
                <label className="form-label">Operating System</label>
                <input type="text" className="form-control" value={operatingSystem} onChange={(e) => setOperatingSystem(e.target.value)} />
            </div>
            <div className="mb-3 w-25">
                <label className="form-label">Image</label>
                <input type="text" className="form-control" value={img} onChange={(e) => setImg(e.target.value)} />
            </div>
            <div className="mb-3 w-25">
                <label className="form-label">Price</label>
                <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="mb-3 w-25">
                <label className="form-label">Category</label>
                <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <button onClick={handleUserClick}>Click</button>
        </div>
    );
}

export default AddProduct;