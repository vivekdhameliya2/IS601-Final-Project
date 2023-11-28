import * as React from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';


export default function ColorInversionFooter() {
  const [color, setColor] = React.useState('neutral');
  return (
    <Sheet
      variant="solid"
      color={"neutral"}
      invertedColors
      sx={{p: 2, backgroundColor:'black',marginTop:5}}
    >
      <Box sx={{ display: 'flex' ,alignItems:"center",justifyContent:'space-evenly'}}>
       <Typography variant="body-lg" sx={{fontWeight:"700",fontSize:'32',fontFamily:"public Sans"}}>Want More? Sign Up For Pizza Offer</Typography>
       <Input
          sx={{ '--Input-decoratorChildHeight': '45px', backgroundColor:"white" , width: '40%',
          '& input': {
            color: 'black',
          },}}
          placeholder="mail@mui.com"
          color='black'
          type="email"
          required
         // value={data.email}
          onChange={(event) =>
        setData({ email: event.target.value, status: 'initial' })
          }
         // error={data.status === 'failure'}
        />
         <Button
              variant="solid"
              color="primary"
             // loading={data.status === 'loading'}
              type="submit"
              sx={{ borderRadius: 10 ,backgroundColor:"red",color:'white'}}
            >
              Submit
            </Button>
      </Box>
      <Divider sx={{ my: 2 }} />
      
      <Box
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px', '--ListItem-gap': '0px', alignItems:'center',justifyContent:'space-between', }}
        >
          <ListItem nested sx={{ width: { xs: '40%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Services</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Blog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>About</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Services</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Blog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>About</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: 'initial' } }}
          >
            <img alt="" src="/static/blog/mui-product-comparison/ecosystem.png" />
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">Intro to the MUI ecosystem</Typography>
            <Typography level="body-xs">Blog post</Typography>
          </CardContent>
        </Card>
          <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Products</ListSubheader>
            <List sx={{ '--ListItemDecorator-size': '32px' }}>
              <ListItem>
                <ListItemButton>Joy UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Base UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Material UI</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Products</ListSubheader>
            <List sx={{ '--ListItemDecorator-size': '32px' }}>
              <ListItem>
                <ListItemButton>Joy UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Base UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Material UI</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}
