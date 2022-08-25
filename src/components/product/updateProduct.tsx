import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';
import { useAppSelector } from '../../app/hooks';
import { Category, Product } from '../../models'


const UpdateProduct = () => {
    const categories: Category[] = useAppSelector((state) => state.category.categories.allCategory)
    const param: any = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [CPU, setCPU] = useState('')
    const [ram, setRam] = useState('')
    const [hardDrive, setHardDrive] = useState('')
    const [card, setCard] = useState('')
    const [operatingSystem, setOperatingSystem] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    useEffect(() => {
        console.log('cow')
    }, [categories])
    const handleUserClick = async () => {
        const dataForm = new FormData();
        dataForm.append("id", param.id)
        dataForm.append("name", name)
        dataForm.append("CPU", CPU)
        dataForm.append("ram", ram)
        dataForm.append("hardDrive", hardDrive)
        dataForm.append("card", card)
        dataForm.append("operatingSystem", operatingSystem)
        dataForm.append("img", img)
        dataForm.append("price", String(price))
        dataForm.append("category", category)
        try {
            await axiosClient({
                method: "PUT",
                url: "/product",
                headers: {
                    "authorization": `Bearer ${localStorage.token}`,
                },
                data: dataForm
            });
            alert('Cập nhật sản phẩm thành công')
            navigate('/')
        } catch (error) {
            alert('Có lỗi xảy ra trong quá trình cập nhật')
        }
    }

    useEffect(() => {
        axiosClient.get('/product/', {
            params: { id: param.id },
            headers: {
                "token": `Bearer ${localStorage.token}`,
            }
        }).then((data) => {
            const product: Product = data.data
            setName(product.name)
            setCPU(product.CPU)
            setRam(product.ram)
            setHardDrive(product.hardDrive)
            setCard(product.card)
            setOperatingSystem(product.operatingSystem)
            setPrice(product.price)
            setCategory(product.category)
        })
    }, [])

    const handleFileSelect = (event: any) => {
        setImg(event.target.files[0])
    }
    return (
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
                    <input type="text" className="form-control" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
                </div>

                <div className="mb-3 ">
                    <label className="form-label">Category</label>
                    <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} >
                        {categories?.map((item, index) => {
                            return (
                                <option key={index} value={item._id}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary btn-success mt-2 p-3" onClick={handleUserClick}>Update</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct;