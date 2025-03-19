type FileSource={
    path: string
};

type DBSource={
    connectionUrl: string
};

type Source = FileSource | DBSource;

function loadData(source: Source){
    if('path' in source){
        console.log(source.path);
    }
    else{
        console.log(source.connectionUrl);
    }
}