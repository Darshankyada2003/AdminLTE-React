import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard({ setIsuserlogin }) {

    useEffect(() => {
        document.title = "Dashboard";
        document.body.className = 'sidebar-mini';
        return () => { document.body.className = 'login-page'; }
    }, [])

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    //const [visible, setVisible] = useState(false);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, [])

    const handlelogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsuserlogin(false);
        navigate("/login");
    }

    /* const handleclick = () => {
        setVisible((prev) => !prev);
    }*/

    return (
        <div class="hold-transition sidebar-mini">
            <div class="wrapper">
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">

                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="pushmenu" href="" role="button"><i class="fas fa-bars"></i></a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <a href="" class="nav-link">Contact</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="navbar-search" href="" role="button">
                                <i class="fas fa-search"></i>
                            </a>
                            <div class="navbar-search-block">
                                <form class="form-inline">
                                    <div class="input-group input-group-sm">
                                        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div class="input-group-append">
                                            <button class="btn btn-navbar" type="submit">
                                                <i class="fas fa-search"></i>
                                            </button>
                                            <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a class="nav-link" data-toggle="dropdown">
                                {user && (
                                    <span><strong>{user.name}</strong> <i className="fas fa-caret-down"></i></span>
                                )}
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-user"></i> Profile
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-key"></i> Password
                                </a>
                                <div className="dropdown-divider"></div>
                                <a onClick={handlelogout} className="dropdown-item">
                                    <i className="fas fa-sign-out-alt"></i> Logout
                                </a>
                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link" data-toggle="dropdown" href="">
                                <i class="far fa-comments"></i>
                                <span class="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="" class="dropdown-item">
                                    <div class="media">
                                        <img src="admin/image/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle" />
                                        <div class="media-body">
                                            <h3 class="dropdown-item-title">
                                                Brad Diesel
                                                <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                                            </h3>
                                            <p class="text-sm">Call me whenever you can...</p>
                                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="" class="dropdown-item">
                                    <div class="media">
                                        <img src="admin/image/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                                        <div class="media-body">
                                            <h3 class="dropdown-item-title">
                                                John Pierce
                                                <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                                            </h3>
                                            <p class="text-sm">I got your message bro</p>
                                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="" class="dropdown-item">
                                    <div class="media">
                                        <img src="admin/image/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                                        <div class="media-body">
                                            <h3 class="dropdown-item-title">
                                                Nora Silvester
                                                <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                                            </h3>
                                            <p class="text-sm">The subject goes here</p>
                                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="" class="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" data-toggle="dropdown" href="">
                                <i class="far fa-bell"></i>
                                <span class="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span class="dropdown-item dropdown-header">15 Notifications</span>
                                <div class="dropdown-divider"></div>
                                <a href="" class="dropdown-item">
                                    <i class="fas fa-envelope mr-2"></i> 4 new messages
                                    <span class="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="" class="dropdown-item">
                                    <i class="fas fa-users mr-2"></i> 8 friend requests
                                    <span class="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="" class="dropdown-item">
                                    <i class="fas fa-file mr-2"></i> 3 new reports
                                    <span class="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="" class="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-widget="fullscreen" href="" role="button">
                                <i class="fas fa-expand-arrows-alt"></i>
                            </a>
                        </li>
                        {/* <li class="nav-item">
                            <button type="button" className="btn btn-outline-info" onClick={handlelogout}>Logout</button>
                        </li> &nbsp; 
                        <li className="nav-link">
                            <p data-toggle="dropdown" >
                                {user && (<p><strong>{user.name}</strong> <i className="fas fa-caret-down"></i></p>)}
                            </p>
                            <div class="dropdown-menu-user">
                                <li class="dropdown-item">Profile</li>
                                <li class="dropdown-item">Change-Password</li>
                                <li className="dropdown-item" onClick={handlelogout}>Logout</li>
                            </div>
                        </li> */}
                    </ul>
                </nav>

                <aside class="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="" class="brand-link">
                        <img src="admin/image/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
                        <span class="brand-text font-weight-light">AdminLTE 3</span>
                    </a>

                    <div class="sidebar">
                        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div class="image">
                                <img src="admin/image/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div class="info">
                                <a href="" class="d-block">
                                    {
                                        user && (
                                            <p><strong>{user.name}</strong></p>
                                        )
                                    }
                                </a>
                            </div>
                        </div>

                        <div class="form-inline">
                            <div class="input-group" data-widget="sidebar-search">
                                <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div class="input-group-append">
                                    <button class="btn btn-sidebar">
                                        <i class="fas fa-search fa-fw"></i>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div class="mt-2">
                            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                                <li class="nav-item menu-open">
                                    <a href="" class="nav-link active">
                                        <i class="nav-icon fas fa-tachometer-alt"></i>
                                        <p>
                                            Dashboard
                                            <i class="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>

                <div class="content-wrapper">
                    <div class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1 class="m-0">Dashboard v3</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="">Home</a></li>
                                        <li class="breadcrumb-item active">Dashboard v3</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-header border-0">
                                            <div class="d-flex justify-content-between">
                                                <h3 class="card-title">Online Store Visitors</h3>
                                                <a href="">View Report</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <p class="d-flex flex-column">
                                                    <span class="text-bold text-lg">820</span>
                                                    <span>Visitors Over Time</span>
                                                </p>
                                                <p class="ml-auto d-flex flex-column text-right">
                                                    <span class="text-success">
                                                        <i class="fas fa-arrow-up"></i> 12.5%
                                                    </span>
                                                    <span class="text-muted">Since last week</span>
                                                </p>
                                            </div>

                                            <div class="position-relative mb-4">
                                                <canvas id="visitors-chart" height="200"></canvas>
                                            </div>

                                            <div class="d-flex flex-row justify-content-end">
                                                <span class="mr-2">
                                                    <i class="fas fa-square text-primary"></i> This Week
                                                </span>

                                                <span>
                                                    <i class="fas fa-square text-gray"></i> Last Week
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header border-0">
                                            <h3 class="card-title">Products</h3>
                                            <div class="card-tools">
                                                <a href="" class="btn btn-tool btn-sm">
                                                    <i class="fas fa-download"></i>
                                                </a>
                                                <a href="" class="btn btn-tool btn-sm">
                                                    <i class="fas fa-bars"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="card-body table-responsive p-0">
                                            <table class="table table-striped table-valign-middle">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Sales</th>
                                                        <th>More</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <img src="admin/image/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2" />
                                                            Some Product
                                                        </td>
                                                        <td>$13 USD</td>
                                                        <td>
                                                            <small class="text-success mr-1">
                                                                <i class="fas fa-arrow-up"></i>
                                                                12%
                                                            </small>
                                                            12,000 Sold
                                                        </td>
                                                        <td>
                                                            <a href="" class="text-muted">
                                                                <i class="fas fa-search"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="admin/image/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2" />
                                                            Another Product
                                                        </td>
                                                        <td>$29 USD</td>
                                                        <td>
                                                            <small class="text-warning mr-1">
                                                                <i class="fas fa-arrow-down"></i>
                                                                0.5%
                                                            </small>
                                                            123,234 Sold
                                                        </td>
                                                        <td>
                                                            <a href="" class="text-muted">
                                                                <i class="fas fa-search"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="admin/image/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2" />
                                                            Amazing Product
                                                        </td>
                                                        <td>$1,230 USD</td>
                                                        <td>
                                                            <small class="text-danger mr-1">
                                                                <i class="fas fa-arrow-down"></i>
                                                                3%
                                                            </small>
                                                            198 Sold
                                                        </td>
                                                        <td>
                                                            <a href="" class="text-muted">
                                                                <i class="fas fa-search"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="admin/image/default-150x150.png" alt="Product 1" class="img-circle img-size-32 mr-2" />
                                                            Perfect Item
                                                            <span class="badge bg-danger">NEW</span>
                                                        </td>
                                                        <td>$199 USD</td>
                                                        <td>
                                                            <small class="text-success mr-1">
                                                                <i class="fas fa-arrow-up"></i>
                                                                63%
                                                            </small>
                                                            87 Sold
                                                        </td>
                                                        <td>
                                                            <a href="" class="text-muted">
                                                                <i class="fas fa-search"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-header border-0">
                                            <div class="d-flex justify-content-between">
                                                <h3 class="card-title">Sales</h3>
                                                <a href="">View Report</a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <p class="d-flex flex-column">
                                                    <span class="text-bold text-lg">$18,230.00</span>
                                                    <span>Sales Over Time</span>
                                                </p>
                                                <p class="ml-auto d-flex flex-column text-right">
                                                    <span class="text-success">
                                                        <i class="fas fa-arrow-up"></i> 33.1%
                                                    </span>
                                                    <span class="text-muted">Since last month</span>
                                                </p>
                                            </div>

                                            <div class="position-relative mb-4">
                                                <canvas id="sales-chart" height="200"></canvas>
                                            </div>

                                            <div class="d-flex flex-row justify-content-end">
                                                <span class="mr-2">
                                                    <i class="fas fa-square text-primary"></i> This year
                                                </span>

                                                <span>
                                                    <i class="fas fa-square text-gray"></i> Last year
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header border-0">
                                            <h3 class="card-title">Online Store Overview</h3>
                                            <div class="card-tools">
                                                <a href="" class="btn btn-sm btn-tool">
                                                    <i class="fas fa-download"></i>
                                                </a>
                                                <a href="" class="btn btn-sm btn-tool">
                                                    <i class="fas fa-bars"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                                <p class="text-success text-xl">
                                                    <i class="ion ion-ios-refresh-empty"></i>
                                                </p>
                                                <p class="d-flex flex-column text-right">
                                                    <span class="font-weight-bold">
                                                        <i class="ion ion-android-arrow-up text-success"></i> 12%
                                                    </span>
                                                    <span class="text-muted">CONVERSION RATE</span>
                                                </p>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                                <p class="text-warning text-xl">
                                                    <i class="ion ion-ios-cart-outline"></i>
                                                </p>
                                                <p class="d-flex flex-column text-right">
                                                    <span class="font-weight-bold">
                                                        <i class="ion ion-android-arrow-up text-warning"></i> 0.8%
                                                    </span>
                                                    <span class="text-muted">SALES RATE</span>
                                                </p>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center mb-0">
                                                <p class="text-danger text-xl">
                                                    <i class="ion ion-ios-people-outline"></i>
                                                </p>
                                                <p class="d-flex flex-column text-right">
                                                    <span class="font-weight-bold">
                                                        <i class="ion ion-android-arrow-down text-danger"></i> 1%
                                                    </span>
                                                    <span class="text-muted">REGISTRATION RATE</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <aside class="control-sidebar control-sidebar-dark">
                </aside>

                <footer class="main-footer">
                    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
                    All rights reserved.
                    <div class="float-right d-none d-sm-inline-block">
                        <b>Version</b> 3.2.0
                    </div>
                </footer>
            </div>
        </div >


    )
}
export default Dashboard