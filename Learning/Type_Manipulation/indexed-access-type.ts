type Appuser={
    name: string;
    age: number;
    permission:{
        id: string;
        title: string;
        description: string;
    }[];
};

type permission=Appuser['permission']