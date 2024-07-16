import express, {Request, Response} from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express();
const port = 3000
app.use(bodyParser.json());
app.use(cors())
type Employee = {
    id: number;
    name: string;
    email: string;
    position: string
};  

let employees: Employee[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', position: 'Manager' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', position: 'Employee' }
];

export interface Session {
    id: number;
    theme: string;
    duration: number;
    price: number;
    minParticipants: number;
    availableSlots: string[];
};
  
export let sessions: Session[] = [
    {
        id: 1,
        theme: 'Haunted House',
        duration: 60,
        price: 20,
        minParticipants: 4,
        availableSlots: ['10:00 AM', '12:00 PM', '02:00 PM'],
    },
    {
        id: 2,
        theme: 'Space Adventure',
        duration: 90,
        price: 25,
        minParticipants: 6,
        availableSlots: ['11:00 AM', '01:00 PM', '03:00 PM'],
    },
];
  

//Get all employee
app.get("/employees", (req: Request, res: Response) => {
    res.json(employees);
})

//Add a new employee
app.post("/employees", (req: Request, res: Response) => {
    const lastEmployee = employees[employees.length -1];
    const newId = lastEmployee ? lastEmployee.id + 1 : 1;
    const newEmployee : Employee = {id: newId, ...req.body};
    employees.push(newEmployee);
    res.json(newEmployee);
});

//Update an employee
app.put("/employees/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    const index = employees.findIndex(emp => emp.id === parseInt(id));
    if(index !== -1){
        employees[index] = {...employees[index], ...req.body};
        res.json(employees[index])

    }
    else
        res.status(400).send("Employee not found !")
    
});

//Delete an employee
app.delete("/employees/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    employees = employees.filter(employee => employee.id !== parseInt(id));
    res.status(204).send();
});


//Get all sessions
app.get("/sessions", (req: Request, res: Response) => {
    res.json(sessions);
})

//Add a session
app.post("/sessions", (req: Request, res: Response) => {
    const lastSession = sessions[sessions.length -1];
    const newId = lastSession ? lastSession.id + 1 : 1
    const newSession: Session = {id: newId, ...req.body};
    sessions.push(newSession);
    res.status(200).json(newSession);
})

//Update a session
app.put("/sessions/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const index = sessions.findIndex(session => session.id === parseInt(id))
    if(index !== -1){
        sessions[index] = {...sessions[index], ...req.body};
        res.status(200).json(sessions[index])
    }
    else
        res.status(400).send("Session not found")
})

//Delete a session
app.delete("/sessions/:id", (req: Request, res: Response) => {
    const id = req.params.id
    sessions = sessions.filter(session => session.id !== parseInt(id))
    res.status(200).send()
})


app.listen(port, () => {
    console.log(`Server runnig at http://localhost:${port}`)
});

