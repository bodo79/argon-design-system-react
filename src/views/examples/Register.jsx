import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Register extends React.Component {
  render() {
    return (
      <>
        <html>
<head>
<meta charset="utf-8">
</meta>
<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
</meta>
<meta content="Start your development with a Design System for Bootstrap 4." name="description">
</meta>
<meta content="Creative Tim" name="author">
</meta>
<title>
Argon Design System - Free Design System for Bootstrap 4
</title>
</head>
<body>
<p>
 {/* Favicon */}
 <link href="../assets/img/brand/favicon.png" rel="icon" type="image/png">
</link>
 {/* Fonts */}
 <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
</link>
 {/* Icons */}
 <link href="../assets/vendor/nucleo/css/nucleo.css" rel="stylesheet">
</link>
<link href="../assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet">
</link>
 {/* Argon CSS */}
 <link href="../assets/css/argon.css?v=1.0.1" rel="stylesheet" type="text/css">
</link>
 {/* Docs CSS */}
 <link href="../assets/css/docs.min.css" rel="stylesheet" type="text/css">
</link>
</p>
<header className=" header-global">
<Navbar className=" navbar-main navbar-transparent navbar-light headroom" expand="lg" id="navbar-main">
<Container>
<NavbarBrand className=" mr-lg-5" href="../index.html">
<img alt="..." src={require("assets/img/brand/white.png")}>
</img>
</NavbarBrand>
<button aria-controls="navbar_global" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler" data-target="#navbar_global" data-toggle="collapse" id="navbar_global" type="button">
<span className=" navbar-toggler-icon">
</span>
</button>
<UncontrolledCollapse id="navbar_global" navbar toggler="#navbar_global">
<div className=" navbar-collapse-header">
<Row>
<Col className=" collapse-brand" xs="6">
<a href="../index.html">
<img alt="..." src={require("assets/img/brand/blue.png")}>
</img>
</a>
</Col>
<Col className=" collapse-close" xs="6">
<button aria-controls="navbar_global" aria-expanded={false} aria-label="Toggle navigation" className=" navbar-toggler" data-target="#navbar_global" data-toggle="collapse" id="navbar_global" type="button">
<span>
</span>
<span>
</span>
</button>
</Col>
</Row>
</div>
<Nav className=" navbar-nav-hover align-items-lg-center" navbar>
<UncontrolledDropdown nav>
<NavLink data-toggle="dropdown" href="#pablo" onClick={e =>
 e.preventDefault()} role="button">
<i className=" ni ni-ui-04 d-lg-none">
</i>
<span className=" nav-link-inner--text">
Components
</span>
</NavLink>
<DropdownMenu className=" dropdown-menu-xl">
<div className=" dropdown-menu-inner">
<Media className=" d-flex align-items-center" href="https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html">
<div className=" icon icon-shape bg-gradient-primary rounded-circle text-white">
<i className=" ni ni-spaceship">
</i>
</div>
<Media className=" ml-3">
<h6 className=" heading text-primary mb-md-1">
Getting started
</h6>
<p className=" description d-none d-md-inline-block mb-0">
Learn how to use Argon compiling Scss, change brand colors and more.
</p>
</Media>
</Media>
<Media className=" d-flex align-items-center" href="https://demos.creative-tim.com/argon-design-system/docs/foundation/colors.html">
<div className=" icon icon-shape bg-gradient-success rounded-circle text-white">
<i className=" ni ni-palette">
</i>
</div>
<Media className=" ml-3">
<h6 className=" heading text-primary mb-md-1">
Foundation
</h6>
<p className=" description d-none d-md-inline-block mb-0">
Learn more about colors, typography, icons and the grid system we used for Argon.
</p>
</Media>
</Media>
<Media className=" d-flex align-items-center" href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html">
<div className=" icon icon-shape bg-gradient-warning rounded-circle text-white">
<i className=" ni ni-ui-04">
</i>
</div>
<Media className=" ml-3">
<h5 className=" heading text-warning mb-md-1">
Components
</h5>
<p className=" description d-none d-md-inline-block mb-0">
Browse our 50 beautiful handcrafted components offered in the Free version.
</p>
</Media>
</Media>
</div>
</DropdownMenu>
</UncontrolledDropdown>
<UncontrolledDropdown nav>
<NavLink data-toggle="dropdown" href="#pablo" onClick={e =>
 e.preventDefault()} role="button">
<i className=" ni ni-collection d-lg-none">
</i>
<span className=" nav-link-inner--text">
Examples
</span>
</NavLink>
<DropdownMenu>
<DropdownItem href="../examples/landing.html">
Landing
</DropdownItem>
<DropdownItem href="../examples/profile.html">
Profile
</DropdownItem>
<DropdownItem href="../examples/login.html">
Login
</DropdownItem>
<DropdownItem href="../examples/register.html">
Register
</DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>
</Nav>
<Nav className=" align-items-lg-center ml-lg-auto" navbar>
<NavItem>
<NavLink className=" nav-link-icon" href="https://www.facebook.com/creativetim" id="tooltip566812127" target="_blank">
<i className=" fa fa-facebook-square">
</i>
<span className=" nav-link-inner--text d-lg-none">
Facebook
</span>
</NavLink>
<UncontrolledTooltip delay={0} target="tooltip566812127">
Like us on Facebook
</UncontrolledTooltip>
</NavItem>
<NavItem>
<NavLink className=" nav-link-icon" href="https://www.instagram.com/creativetimofficial" id="tooltip524431710" target="_blank">
<i className=" fa fa-instagram">
</i>
<span className=" nav-link-inner--text d-lg-none">
Instagram
</span>
</NavLink>
<UncontrolledTooltip delay={0} target="tooltip524431710">
Follow us on Instagram
</UncontrolledTooltip>
</NavItem>
<NavItem>
<NavLink className=" nav-link-icon" href="https://twitter.com/creativetim" id="tooltip14071179" target="_blank">
<i className=" fa fa-twitter-square">
</i>
<span className=" nav-link-inner--text d-lg-none">
Twitter
</span>
</NavLink>
<UncontrolledTooltip delay={0} target="tooltip14071179">
Follow us on Twitter
</UncontrolledTooltip>
</NavItem>
<NavItem>
<NavLink className=" nav-link-icon" href="https://github.com/creativetimofficial/argon-design-system" id="tooltip173113568" target="_blank">
<i className=" fa fa-github">
</i>
<span className=" nav-link-inner--text d-lg-none">
Github
</span>
</NavLink>
<UncontrolledTooltip delay={0} target="tooltip173113568">
Star us on Github
</UncontrolledTooltip>
</NavItem>
<NavItem className=" d-none d-lg-block ml-lg-4">
<Button className=" btn-neutral btn-icon" color="default" href="https://www.creative-tim.com/product/argon-design-system" rel="noopener noreferrer" target="_blank">
<span className=" btn-inner--icon">
<i className=" fa fa-cloud-download mr-2">
</i>
</span>
<span className=" nav-link-inner--text">
Download
</span>
</Button>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
</header>
<main>
<section className=" section section-shaped section-lg">
<div className=" shape shape-style-1 bg-gradient-default">
<span>
</span>
<span>
</span>
<span>
</span>
<span>
</span>
<span>
</span>
<span>
</span>
<span>
</span>
<span>
</span>
</div>
<Container className=" pt-lg-md">
<Row className=" justify-content-center">
<Col lg="5">
<Card className=" bg-secondary shadow border-0">
<CardHeader className=" bg-white pb-5">
<div className=" text-muted text-center mb-3">
<small>
Sign up with
</small>
</div>
<div className=" text-center">
<Button className=" btn-neutral btn-icon mr-4" color="default" href="#pablo" onClick={e =>
 e.preventDefault()}>
<span className=" btn-inner--icon">
<img alt="..." src={require("assets/img/icons/common/github.svg")}>
</img>
</span>
<span className=" btn-inner--text">
Github
</span>
</Button>
<Button className=" btn-neutral btn-icon" color="default" href="#pablo" onClick={e =>
 e.preventDefault()}>
<span className=" btn-inner--icon">
<img alt="..." src={require("assets/img/icons/common/google.svg")}>
</img>
</span>
<span className=" btn-inner--text">
Google
</span>
</Button>
</div>
</CardHeader>
<CardBody className=" px-lg-5 py-lg-5">
<div className=" text-center text-muted mb-4">
<small>
Or sign up with credentials
</small>
</div>
<Form role="form">
<FormGroup>
<InputGroup className=" input-group-alternative mb-3">
<InputGroupAddon addonType="prepend">
<InputGroupText>
<i className=" ni ni-hat-3">
</i>
</InputGroupText>
</InputGroupAddon>
<Input placeholder="Name" type="text">
</Input>
</InputGroup>
</FormGroup>
<FormGroup>
<InputGroup className=" input-group-alternative mb-3">
<InputGroupAddon addonType="prepend">
<InputGroupText>
<i className=" ni ni-email-83">
</i>
</InputGroupText>
</InputGroupAddon>
<Input placeholder="Email" type="email">
</Input>
</InputGroup>
</FormGroup>
<FormGroup>
<InputGroup className=" input-group-alternative">
<InputGroupAddon addonType="prepend">
<InputGroupText>
<i className=" ni ni-lock-circle-open">
</i>
</InputGroupText>
</InputGroupAddon>
<Input placeholder="Password" type="password">
</Input>
</InputGroup>
</FormGroup>
<div className=" text-muted font-italic">
<small>
password strength: <span className=" text-success font-weight-700">
strong
</span>
</small>
</div>
<Row className=" my-4">
<Col xs="12">
<div className=" custom-control custom-control-alternative custom-checkbox">
<input className=" custom-control-input" id="customCheckRegister" type="checkbox">
</input>
<label className=" custom-control-label" htmlFor="customCheckRegister">
<span>
I agree with the <a href="#pablo" onClick={e =>
 e.preventDefault()}>
Privacy Policy
</a>
</span>
</label>
</div>
</Col>
</Row>
<div className=" text-center">
<Button className=" mt-4" color="primary" type="button">
Create account
</Button>
</div>
</Form>
</CardBody>
</Card>
</Col>
</Row>
</Container>
</section>
</main>
<footer className=" footer">
<Container>
<Row className=" row-grid align-items-center mb-5">
<Col lg="6">
<h3 className=" text-primary font-weight-light mb-2">
Thank you for supporting us!
</h3>
<h4 className=" mb-0 font-weight-light">
Let's get in touch on any of these platforms.
</h4>
</Col>
<Col className=" text-lg-center btn-wrapper" lg="6">
<Button className=" btn-neutral btn-icon-only btn-round" color="twitter" href="https://twitter.com/creativetim" id="tooltip945832972" size="lg" target="_blank">
<i className=" fa fa-twitter">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip945832972">
Follow us
</UncontrolledTooltip>
<Button className=" btn-neutral btn-icon-only btn-round" color="facebook" href="https://www.facebook.com/creativetim" id="tooltip435346196" size="lg" target="_blank">
<i className=" fa fa-facebook-square">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip435346196">
Like us
</UncontrolledTooltip>
<Button className=" btn-neutral btn-icon-only btn-round" color="dribbble" href="https://dribbble.com/creativetim" id="tooltip476298396" size="lg" target="_blank">
<i className=" fa fa-dribbble">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip476298396">
Follow us
</UncontrolledTooltip>
<Button className=" btn-neutral btn-icon-only btn-round" color="github" href="https://github.com/creativetimofficial" id="tooltip609132142" size="lg" target="_blank">
<i className=" fa fa-github">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip609132142">
Star on Github
</UncontrolledTooltip>
</Col>
</Row>
<hr>
</hr>
<Row className=" align-items-center justify-content-md-between">
<Col md="6">
<div className=" copyright">
 © 2018 <a href="https://www.creative-tim.com" rel="noopener noreferrer" target="_blank">
Creative Tim
</a>
. 
</div>
</Col>
<Col md="6">
<Nav className=" nav-footer justify-content-end">
<NavItem>
<NavLink href="https://www.creative-tim.com" rel="noopener noreferrer" target="_blank">
Creative Tim
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://www.creative-tim.com/presentation" rel="noopener noreferrer" target="_blank">
About Us
</NavLink>
</NavItem>
<NavItem>
<NavLink href="http://blog.creative-tim.com" rel="noopener noreferrer" target="_blank">
Blog
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md" rel="noopener noreferrer" target="_blank">
MIT License
</NavLink>
</NavItem>
</Nav>
</Col>
</Row>
</Container>
</footer>
 {/* Core */}
 <script src="../assets/vendor/jquery/jquery.min.js">
</script>
<script src="../assets/vendor/popper/popper.min.js">
</script>
<script src="../assets/vendor/bootstrap/bootstrap.min.js">
</script>
<script src="../assets/vendor/headroom/headroom.min.js">
</script>
 {/* Argon JS */}
 <script src="../assets/js/argon.js?v=1.0.1">
</script>
</body>
</html>

      </>
    );
  }
}

export default Register;