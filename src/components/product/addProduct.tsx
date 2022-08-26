import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';
import { useAppSelector } from '../../app/hooks';
import { Category } from '../../models'
const AddProduct = () => {
    const categories: Category[] = useAppSelector((state) => state.category.categories.allCategory)
    const [name, setName] = useState('')
    const [CPU, setCPU] = useState('')
    const [ram, setRam] = useState('')
    const [hardDrive, setHardDrive] = useState('')
    const [card, setCard] = useState('')
    const [operatingSystem, setOperatingSystem] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        setCategory(String(categories[0]?._id))
    }, [categories])

    const handleUserClick = async () => {
        const dataForm = new FormData();
        dataForm.append("name", name)
        dataForm.append("CPU", CPU)
        dataForm.append("ram", ram)
        dataForm.append("hardDrive", hardDrive)
        dataForm.append("card", card)
        dataForm.append("operatingSystem", operatingSystem)
        dataForm.append("img", img)
        dataForm.append("price", price)
        dataForm.append("category", category)
        try {
            await axiosClient({
                method: "post",
                url: "/product",
                headers: {
                    "authorization": `Bearer ${localStorage.token}`,
                },
                data: dataForm
            });
            alert('Create success')
            navigate('/product/add')
        } catch (error) {
            alert('Có lỗi khi thêm sản phẩm')
        }
        // const product: Product = {
        //     name: name,
        //     CPU: CPU,
        //     ram: ram,
        //     hardDrive: hardDrive,
        //     card: card,
        //     operatingSystem: operatingSystem,
        //     img: img,
        //     price: Number(price),
        //     category: category
        // }
    }

    const handleFileSelect = (event: any) => {
        setImg(event.target.files[0])
    }

    const changeSelect = (e: any) => {
        setCategory(e.target.value)
    }

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="card w-50 m-3 p-3 bg-light">
                    <div className="mb-3 ">
                        <label className="form-label">Tên sản phẩm</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">CPU</label>
                        <input type="text" className="form-control" value={CPU} onChange={(e) => setCPU(e.target.value)} />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Ram</label>
                        <input type="text" className="form-control" value={ram} onChange={(e) => setRam(e.target.value)} />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">HardDrive</label>
                        <input type="text" className="form-control" value={hardDrive} onChange={(e) => setHardDrive(e.target.value)} />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Card</label>
                        <input type="text" className="form-control" value={card} onChange={(e) => setCard(e.target.value)} />
                    </div>

                    <div className="mb-3 ">
                        <label className="form-label">Operating System</label>
                        <input type="text" className="form-control" value={operatingSystem} onChange={(e) => setOperatingSystem(e.target.value)} />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Image</label>
                        <input type="file" className="form-control" onChange={handleFileSelect} />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Price</label>
                        <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div className="mb-3 ">
                        <label className="form-label">Category</label>
                        <select className="form-control" value={category} onChange={changeSelect} >
                            {categories?.map((item, index) => {
                                return (
                                    <option key={index} value={item._id}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-success mt-2 p-3" onClick={handleUserClick}>Create</button>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-end m-3">
                <button className="btn btn-secondary" onClick={() => { navigate('/') }}>Back</button>
            </div>
        </>
    );
}

export default AddProduct;