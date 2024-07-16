import React, {useState, useEffect, useContext} from "react";
import {getEmployees, addEmployee, updateEmployee, deleteEmployee}  from "../api/ApiService"
import{
    ContainerLight, ContainerNight,
    TitleLight, TitleNight,
    FormGroup,
    LabelLight, LabelNight,
    InputLight, InputNight,
    ButtonLight, ButtonNight,
    EmployeeListContainer,
    EmployeeItem,
    EditButtonLight, EditButtonNight,
    DeleteButtonLight, DeleteButtonNight
} from '../styles/EmployeeList.styled';
import ThemeContext from "../context/ThemeContext";

type Employee = {
    id: number;
    name: string;
    email: string;
    position: string;
}


const EmployeeList = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [newEmployee, setNewEmployee] = useState<Employee>({id: 0, name: "", email: "", position: ""})
    const [editEmployee, setEditEmployee] = useState<Employee | null>(null);
    const themeContext = useContext(ThemeContext);

    const Container = themeContext?.theme === 'night' ? ContainerNight : ContainerLight;
    const Title = themeContext?.theme === 'night' ? TitleNight : TitleLight;
    const Label = themeContext?.theme === 'night' ? LabelNight : LabelLight;
    const Input = themeContext?.theme === 'night' ? InputNight : InputLight;
    const Button = themeContext?.theme === 'night' ? ButtonNight : ButtonLight;
    const EditButton = themeContext?.theme === 'night' ? EditButtonNight : EditButtonLight;
    const DeleteButton = themeContext?.theme === 'night' ? DeleteButtonNight : DeleteButtonLight;
    
    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const data = await getEmployees();
        setEmployees(data);
    }

    const handleAdd = async () => {
        await addEmployee(newEmployee);
        setNewEmployee({id: 0, name: "", email: "", position: ""})
        fetchEmployees();
    }
    
    const handleUpdate = async () => {
        if(editEmployee){
            await updateEmployee(editEmployee.id, editEmployee);
            setEditEmployee(null);
            fetchEmployees();
        }
    }

    const handleDelete = async (id: number) => {
        await deleteEmployee(id);
        fetchEmployees();
    }
    return(
    <Container>
        <div>
        <Title>Employee List</Title>
        
        <h3>Add New Employee</h3>
        
        <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
            type="text"
            placeholder="Name"
            value={newEmployee.name}
            onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
            />
        </FormGroup>

        <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
            type="text"
            placeholder="Email"
            value={newEmployee.email}
            onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
            />
        </FormGroup>

        <FormGroup>
            <Label htmlFor="position">Position</Label>
            <Input
            type="text"
            placeholder="Position"
            value={newEmployee.position}
            onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
            />
        </FormGroup>
        <Button onClick={handleAdd}>Add new Employee</Button>

        <h3>Update Employee</h3>
        {editEmployee && (
            <>
            <FormGroup>
                <Label htmlFor="editName">Name</Label>
                <Input
                    type="text"
                    placeholder="Name"
                    value={editEmployee.name}
                    onChange={(e) => setEditEmployee({ ...editEmployee, name: e.target.value })}
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="editEmail"></Label>
                <Input
                    type="text"
                    placeholder="Email"
                    value={editEmployee.email}
                    onChange={(e) => setEditEmployee({ ...editEmployee, email: e.target.value })}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="editPosition"></Label>
                <Input
                    type="text"
                    placeholder="Positon"
                    value={editEmployee.position}
                    onChange={(e) => setEditEmployee({ ...editEmployee, position: e.target.value})}
                />
            </FormGroup>
            <Button onClick={handleUpdate}>Update Employee</Button>
            </>
            )}
            <EmployeeListContainer>
                {employees.map((employee) => (
                <EmployeeItem key={employee.id}>
                    {employee.name} - {employee.email} - {employee.position}
                    <div>
                    <EditButton onClick={() => setEditEmployee(employee)}>Edit</EditButton>
                    <DeleteButton onClick={() => handleDelete(employee.id)}>Delete</DeleteButton>
                    </div>
                </EmployeeItem>
                ))}
            </EmployeeListContainer>
        </div>
    </Container>
    );
    
}
export default EmployeeList;