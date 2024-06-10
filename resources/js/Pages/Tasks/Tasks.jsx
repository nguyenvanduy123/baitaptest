import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/Authenticated/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Tab from "@/Components/Tab/Tab";
import './style.scss';
import SearchHeader from "@/Components/SearchHeader/SearchHeader";
import HeaderTable from "@/Components/HeaderTable/HeaderTable";
import Table from "@/Components/table/Table";
import Pagination from '@/Components/Pagination/Pagination';
import CheckBoxV1 from '@/Components/CheckBoxV1/CheckBoxV1';
import Dropdown from "@/Components/Dropdown/Dropdown";
import Modal from "@/Components/Modal/Modal";
import axios from "axios";
import ButtonDropdown from "@/Components/ButtonDropdownV1/ButtonDropdownV1";
function Tasks(props) {
    const [activeTab, setActiveTab] = useState(4);
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };


    const tabs = [
        { id: 1, label: 'Contacts', icon: '/image/tab1.png' },
        { id: 2, label: 'Listes', icon: '/image/tab2.png' },
        { id: 3, label: 'Opportunités', icon: '/image/tab3.png' },
        { id: 4, label: 'Tâches', icon: '/image/tab4.png' },
    ];
    const [open, setOpen] = useState(false);
    const [deletedatarow, setdatarowdelete] = useState([]);


    const onChangeCheckbox = (e, value, isall) => {


    }
    const handleEdit = () => {
    };

    const handleDelete = () => {

    };
    const [ValueStatus, setValueStatus] = useState({ id: "", name: "chọn trạng thái" },);
    const [Colums, setColums] = useState([
        {
            title: 'Réalisé',
            dataIndex: 'accomplished',
            style: {
                textAlign: "center",

            },
            render: (text, record) => {
                return <CheckBoxV1
                    style={{ marginRight: "10px", width: "25px", height: "25px" }}
                />

            }
        },
        {
            title: 'Titre',
            dataIndex: 'title',
            style: {
                textAlign: "left"
            },


        },
        {
            title: "Date d'échéance",
            dataIndex: "duedate",
            style: {
                textAlign: "left"
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            style: {
                textAlign: "center"
            },
            render: (text, reid) => {

                return <span style={{ cursor: "pointer", display: "flex" }}><img src={'/image/Message.png'} style={{
                    width: "11px",
                    height: "15px",
                    marginTop: "6px",
                    marginRight: "2px",
                    marginLeft: "-3px"
                }} />{text}</span>
            }
        },
        {
            title: 'Opportunité',
            dataIndex: 'opportunity',
            style: {
                textAlign: "left"
            },
            render: (text, reid) => {

                return <span style={{ cursor: "pointer", display: "flex" }}><img src={'/image/Call.png'} style={{ margin: "0px 2px", width: "12px", height: "20px", marginTop: "12px" }} />{text}</span>
            }
        },
        {
            title: 'Statut',
            dataIndex: 'status',
            style: {
                textAlign: "left"
            },
            render: (text, reid, index) => {
                return <ButtonDropdown className={"_select_input inputs_item"} placeholder={"Trạng thái "} id="status" name="status"
                    Options={props.statuscontac}
                    onChange={(e) => { onchangeStatus(e, reid, index) }}
                    value={reid.idstatus}
                    style={{
                        height: "24px",
                        width: "100px",
                        padding: 0,
                        background: reid.idstatus == 1 ? 'rgba(255, 0, 31, 0.2)' : '',
                    }}
                    icon={"/image/ic-droppagiin.png"}
                    isHover={false}
                >
                    <button className={"reset_btn"} style={{ marginRight: "30px" }}>{getStatusText(reid.idstatus)}</button>
                </ButtonDropdown>
            }

        },

        {
            title: 'Contact associé',
            dataIndex: 'contact',
            style: {
                textAlign: "left"
            }
        },
        {
            title: 'Responsable',
            dataIndex: 'iduser',
            style: {
                textAlign: "left",
                borderRight: "none",
            }
        },
        {
            title: 'Date de création',
            dataIndex: 'created',
            style: {
                textAlign: "left",

            }
        },
        {
            title: <img src='/image/Setting-3.png' alt='Tác vụ' style={{ width: "24px", height: "24px" }} />,
            dataIndex: '',
            style: {
                textAlign: "center"
            },
            render: (text, record, index) => {
                return <div style={{ display: "flex" }}>
                    <button onClick={() => setOpen(true)}><img style={{ margin: "0px 2px", width: "20px", height: "20px", marginTop: "12px" }} src='/image/Edit-1.png' /></button>
                    <button onClick={handleDelete}><img style={{ margin: "0px 2px", width: "20px", height: "20px", marginTop: "12px" }} src='/image/Delete-1.png' /></button>
                </div>


            }
        }

    ]);
    let [select, setSelect] = useState([]);

    const [DataRow, setDataRow] = useState([]);





    const [OptionsPagi, setOptionsPagi] = useState([]);
    const [isChangeData, setisChangeData] = useState(false);
    const [isChangeIndex, setisChangeIndex] = useState("");
    const [TotalRecord, setTotalRecord] = useState(0);//tổng số
    const [ValueLimit, setValueLimit] = useState({ id: 30, name: '30' });
    const [ValueSelectLimit, setValueSelectPage] = useState({});

    const [DataRowShow, setDataRowShow] = useState([]);
    const [CurrentPage, setCurrentPage] = useState(1);



    const getStatusText = (e) => {
        return (props.statuscontac.filter(item => {

            return e === item.id
        }))[0].name
    }
    const onchangeStatus = (e, item, index) => {
        // setisChangeIndex(index)
        // setValueStatus(e)
        // const entryData = {
        //     idstatus : e.id,
        //     status:item.id
        // }
        // axios
        //         .post("/Tasks/status-change",entryData)
        //         .then((response) => {
        //         })
        //         .catch((error) => {
        //             console.error("Error sending data:", error);
        //         });
        // setisChangeData(!isChangeData)
        setisChangeIndex(index)
        setValueStatus(e)
        setisChangeData(!isChangeData)

    }



    const onChangeSelectNumPages = (e) => {
        const selectedValue = e.id;
        setValueLimit({ id: selectedValue, name: selectedValue.toString() });

    }

    const OnchangePage = (e, i) => {
        setCurrentPage(i)

    }
    const OnchangePageNext = (e, i) => {
        setCurrentPage(i)



    }
    const OnchangePagePre = (e, i) => {

        setCurrentPage(i)

    }
    const [ValueSearch, setValueSearch] = useState('');
    const [ValueStatusdrop, setValueStatusdrop] = useState('');
    const [valuesearchdrop ,setvaluesearchdrop] = useState('');
    const [valuesearchdropuser ,setvaluesearchdropuser] = useState('');
    const [valuesearchusser, setvaluesearchusser] = useState('');
    const onchangeSearch = (e) => {
        setValueSearch(e.target.value)

    }
    ////gọi api
    useEffect(() => {


        axios
            .get("/Tasks/tasks-table", {
                params: {
                    searchTerm: ValueSearch,
                    Valuedrop:valuesearchdrop,
                    valuedropuser:valuesearchdropuser,
                    page: CurrentPage,
                    perPage: ValueLimit.id,


                }
            })
            .then((response) => {
                setDataRow(response.data.data);
                setTotalRecord(response.data.total)
                setCurrentPage(response.data.current_page)
                renderOptionlimit(response.data.total);


            })
            .catch((error) => {
                console.error("Error sending data:", error);
            });

    }, [ValueSearch,valuesearchdrop,valuesearchdropuser, ValueLimit, CurrentPage]);
    const renderOptionlimit = (totalItems) => {
        const result = [];
        for (let i = 1; i <= 10; i++) {
            const dataPerpage = Math.ceil(totalItems / 10) * i;
            result.push({ id: dataPerpage, name: dataPerpage });
        }
        // setValueLimit(result[0]);
        setOptionsPagi(result);
    };

    const onchangeStatusDrop = (e) => {
        setvaluesearchdrop(e.id);
        setValueStatusdrop(e.name);

    }
   const onchangeStatusDropuser= (e) => {
         setvaluesearchdropuser(e.id)
        setvaluesearchusser(e.name)

    }
    return (
        <AuthenticatedLayout>
            <Head title="Task" />
            <Modal open={open} onClose={() => setOpen(false)} />
            <div className="Main-task">
                <div className='content-task-tab'>
                    <Tab tabs={tabs} activeTab={activeTab} handleTabClick={handleTabClick} />
                </div>
            </div>
            <div className="content-container">
                <div className="content-header-task">
                    <SearchHeader
                        Optionss={props.statuscontac}
                        onchangeSearch={onchangeSearch}
                        InputSeachvalue={ValueSearch}
                        onchangeStatusDrop={onchangeStatusDrop}
                        onchangeStatusDropuser={onchangeStatusDropuser}
                        ValueStatusdrop={ValueStatusdrop}
                        valuesearchusser ={valuesearchusser}
                        Optionssuser={props.users}/>
                </div>
                <div className="content-list-task">
                    <HeaderTable
                        title1={'Tout'}
                        icon1={'/image/Message.png'}
                        title2={'Appel'}
                        icon2={'/image/Call.png'}
                        title3={'E-mail'}
                        title4={'À faire'}
                        title5={'En retard'}
                        title6={'Aujourd’hui'}
                        title7={'Demain'}
                        title8={'P1'}
                        title9={'P2'}
                        title10={'P3'}

                    />
                </div>
            </div>
            <div className="table-content">

                <Table
                    Colums={Colums}
                    DataRow={DataRow}
                    ischeckbox={true}
                    isboder={false}
                    onChangeCheck={(data) => {
                        setdatarowdelete(data)
                    }}

                />
                <Pagination style={{ marginTop: "5px" }}
                    Options={OptionsPagi}
                    OnChangeSelectNumPages={onChangeSelectNumPages}

                    ValueSelectLimit={ValueLimit}
                    CurrentPage={CurrentPage}
                    ShowStatus={true}
                    LimitButton={10}
                    OnclickButtonChangePage={OnchangePage}
                    ShowNextPre={true}
                    OnclickButtonNext={OnchangePageNext}
                    OnclickButtonPre={OnchangePagePre}
                    TotalRecord={TotalRecord}
                    icon1={'/image/pagin1.png'}
                    icon2={'/image/pagin2.png'}
                    icon3={'/image/pagin3.png'}
                    icon4={'/image/pagin4.png'}
                />

            </div>


        </AuthenticatedLayout>
    )
}
export default Tasks;
