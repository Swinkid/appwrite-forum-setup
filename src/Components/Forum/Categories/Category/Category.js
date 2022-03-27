import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

export function Category(props){
    const {name, description} = props;

    return (
        <Card style={{marginTop: '1rem'}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
