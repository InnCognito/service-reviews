import ShowOneReview from './ShowOneReview.jsx'
import PageButtons from './PageButtons.jsx';

class ReviewRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: 0
    }
  }
//<ReviewRender data={this.state.rev_data} search_text={this.state.search_text}/>
  changePage(e) {
    e.preventDefault();
    if(e.target.value === "<") {
      this.setState({
        curPage: this.state.curPage - 1,
      });
      return;
    } else if (e.target.value === ">") {
      this.setState({
        curPage: this.state.curPage + 1,
      })
      return;
    }
    this.setState({
      curPage: e.target.value - 1,
    });
    return;
  }

  render() {
    if(this.props.data[this.state.curPage]) {
      return (
        <div>
          <div>
            {this.props.data[this.state.curPage].map((item) => {
              return <ShowOneReview key={item.id + 'rev'} review={item} search_text={this.props.search_text}/>
            })}
          </div>
          <PageButtons curPage={this.state.curPage} data={this.props.data} changePage={this.changePage.bind(this)}/>
          <br/>
          <br/>
        </div>
      );
    } else {
      return (<div>None of our guests have mentioned: "<strong>{this.props.search_text}</strong>"</div>)
    }
  }
}

export default ReviewRender;