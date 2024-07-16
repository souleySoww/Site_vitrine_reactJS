const API_URL = "http://localhost:3000";


export const getEmployees = async () => {
    const response = await fetch(`${API_URL}/employees`);
    return response.json(); 
};


export const addEmployee = async (employee: any) => {
    const response = await fetch(`${API_URL}/employees`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(employee),
    })
    return response.json();
}

export const updateEmployee = async (id: number, employee: any) => {
    const response = await fetch(`${API_URL}/employees/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(employee),

        });
    return response.json();    
}


export const deleteEmployee = async (id: number) => {
    await fetch(`${API_URL}/employees/${id}`,{
        method: 'DELETE',
    });
}

export const getSessions = async () => {
    const response = await fetch(`${API_URL}/sessions`);
    return response.json();
  };
  
  export const addSession = async (session: any) => {
    const response = await fetch(`${API_URL}/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(session),
    });
    return response.json();
  };
  
  export const updateSession = async (id: number, session: any) => {
    const response = await fetch(`${API_URL}/sessions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(session),
    });
    return response.json();
  };
  
  export const deleteSession = async (id: number) => {
    await fetch(`${API_URL}/sessions/${id}`, {
      method: 'DELETE',
    });
}  
