import React from 'react'
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'
//Title
//Img
//Date
//Description

export default class MovieCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
                movies: [{
                    "Title": "Hasete",
                    "Date": "1990",
                    "Description": "Titanic is a film living in Nashville",
                    "Img": "http://semantic-ui.com/images/avatar2/large/matthew.png"
                },
                {
                    "Title": "Afram",
                    "Date": "2014",
                    "Description": "Avatar is a film living in Nashville",
                    "Img": "http://semantic-ui.com/images/avatar/large/elliot.jpg"
                },
                {
                    "Title": "Mom",
                    "Date": "2014",
                    "Description": "Avatar is a film living in Nashville",
                    "Img": "http://semantic-ui.com/images/avatar/large/elliot.jpg"
                }
                ]
        }
    }

  render() {
      const src='http://semantic-ui.com/images/avatar2/large/matthew.png'

      const films = this.state.movies
      const paragraph = <ImageComponent src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    return (

        <Item.Group divided>
    <Item>
      <Item.Image src='http://semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='http://semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>My Neighbor Totoro</Item.Header>
        <Item.Meta>
          <span className='cinema'>IFC Cinema</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
          <Label>Limited</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
        <Item>
      <Item.Image src='http://semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='http://semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>My Neighbor Totoro</Item.Header>
        <Item.Meta>
          <span className='cinema'>IFC Cinema</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
          <Label>Limited</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
        <Item>
      <Item.Image src='http://semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='http://semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>My Neighbor Totoro</Item.Header>
        <Item.Meta>
          <span className='cinema'>IFC Cinema</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
          <Label>Limited</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
        </Item.Group>






        /*<div>
            <Card.Group itemsPerRow={4}>
                {films.map(function(film){
                return(
                <Card>
                        <Image src={film.Img} />
                        <Card.Content>
                        <Card.Header>
                            {film.Title}
                        </Card.Header>
                        <Card.Meta>
                            <span className='date'>
                            {film.Date}
                            </span>
                        </Card.Meta>
                        <Card.Description>
                        {film.Description}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                        </a>
                        </Card.Content>
                    </Card>
                    )

                    })
                }
            </Card.Group>
            </div>*/


    )

  }
}