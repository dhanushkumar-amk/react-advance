import {Button, Card, CardActions, CardContent, Typography} from '@mui/material'

const TodoItem = ({todoItem}) => {
  return (
    <Card sx={{
        maxWidth : 350,
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-betweens"
    }}>
        <CardContent>
            <Typography variant='h5' color={'textSecondary'} >{todoItem?.todo}</Typography>
        </CardContent>

        <CardActions>
            <Button sx={{
                backgroundColor : "#000000",
                color : "#ffff",
                opacity : "0.75",
                "&:hover" : {
                      backgroundColor : "#000000",
                color : "#ffff",
                opacity : "1",
                },
            }} >Show Details</Button>
        </CardActions>
    </Card>
  )
}

export default TodoItem
