import { useRouter } from 'next/router'
import React from "react";
import { Navbar, Button, Link, Input, Row, Checkbox, Modal, Text, useTheme } from "@nextui-org/react";
import { Mail } from './icons/mail';
import { Password } from './icons/password';

const MENU_LIST = [
    { text: "Home", link: "/" },
    { text: "Upload", link: "/upload" },
];

export default function Menu() {
    const router = useRouter();  
    const {isDark} = useTheme();

    const [visible, setVisible] = React.useState(false);
    const handler = () => {
      setVisible(true);
    };

    const closeHandler = () => {
      setVisible(false);
      console.info("closed");
    };

    return (
        <>
        <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
    >
        <Modal.Header>
        <Text id="modal-title" size={18}>
            Please enter your credentials
        </Text>
        </Modal.Header>
        <Modal.Body>
        <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
        />
        <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
        />
        <Row justify="space-between">
            <Checkbox>
            <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
        </Row>
        </Modal.Body>
        <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
            Close
        </Button>
        <Button auto onPress={closeHandler}>
            Sign in
        </Button>
        </Modal.Footer>
        </Modal>
            <Navbar isBordered={isDark} variant="sticky">
            <Navbar.Brand>
              <Text b color="inherit" hideIn="xs">
                Moon  
              </Text>
            </Navbar.Brand>
            <Navbar.Content activeColor="primary" hideIn="xs" variant="sticky">
              {MENU_LIST.map((menu) => (
                <Navbar.Item isActive={router.pathname === menu.link} css={{cursor: 'pointer'}}>
                  <Link onPress={() => router.push(menu.link)}>{menu.text}</Link>
                </Navbar.Item>
              ))}
            </Navbar.Content>
            <Navbar.Content>
              <Navbar.Link color="inherit" onPress={handler}>
                Login
              </Navbar.Link>
              <Navbar.Item>
                <Button auto flat as={Link} color="primary" href="#">
                  Sign Up
                </Button>
              </Navbar.Item>
            </Navbar.Content>
          </Navbar>
      </>
    )
}