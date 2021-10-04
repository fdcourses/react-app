import { Component } from 'react';
import PropTypes from 'prop-types';

// 1. прогрузка данных
// 2. отправить данные куда-то. где они отрисуются
// 3. он за отрисовку этих данных не отвечает

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.load();
  }

  load = () => {
    this.setState({
      isLoading: true,
    });

    const { loadData } = this.props;

    loadData()
      .then((data) => {
        this.setState({
          data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          isLoading: false,
        });
      });
  };

  render() {
    const { children } = this.props;

    return children(this.state);
  }
}

DataProvider.propTypes = {
  loadData: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default DataProvider;
