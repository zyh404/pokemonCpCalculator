import React from 'react';
import {connect} from 'react-redux';
import AppFrame from './_frames/app';
import {selectTodos} from '../modules/todo/selectors';
import pokedex from '../pokedex.js';
import CpTag from '../components/CpTag.js';
import CpCal from '../components/CpCal.js';

const Pokecalc = React.createClass({
        propTypes: {
        todos: React.PropTypes.array,
        dispatch: React.PropTypes.func,
    },
    getInitialState () {
        return {
            value: 0,
            selected: pokedex[1]
        };
    },
    getEvolve (pokeid) {
        if ('nextEvolve' in pokedex[pokeid]){
            if (!Array.isArray(pokedex[pokeid].nextEvolve)) {
                return pokedex[pokedex[pokeid].nextEvolve];
            } else {
                let evolves = [];
                for (let i in pokedex.nextEvolve) {
                    if (typeof pokedex[pokeid].nextEvolve[i] !== 'undefined') {
                        let evolution = pokedex[pokeid].nextEvolve[i];
                        evolves.push(pokedex[evolution]);
                    }
                }
                return evolves;
            }
        }
        return false;
    },
    getMaxCpEvolve () {
        const {max} = this.state;
        const {value} = this.state.value;
        if ('max' === 1) {
            return false;
        } else {
            this.setState({value:max * value });
        }
    },
    getMinCpEvolve () {
        const {min} = this.state;
        const {value} = this.state.value;
        if ('min' === 1) {
            return false;
        } else { 
            this.setState({value:min * value });
        }
    },
    changeValue (event) {
        let val = Number.parseInt(event.target.value, 10);
        if (isNaN(val)) {
            this.setState({value: 0});
        } else {
            this.setState({value: val});
        }
    },
    updateSelected (pokemonId) {
        this.setState({selected: pokedex[pokemonId.target.value]});
    },
    getOptionsFromPokedex () {
        let options = [];
        for (let pokeid in pokedex) {
            if (pokeid !== '0') {
                let pokemon = pokedex[pokeid];
                let name = pokemon.name;
                let option = '';

                if (typeof pokemon.nextEvolve !== 'undefined') {
                    option = <option key={pokeid} value={pokeid}>{name}</option>;
                } else {
                    option = <option key={pokeid} disabled='true' value={pokeid}>{name}</option>;
                }

                options.push(option);
            }
        }
        return options;
    },
    showCpCalc () {
        if (typeof this.state.selected.nextEvolve === 'undefined') {
            return;
        }

        let buffer = [];

        if (!Array.isArray(this.state.selected.nextEvolve)) {
            let nextEvolve = pokedex[this.state.selected.nextEvolve];
            //console.log("33");
            let firstEvolveMin = Math.round(this.state.value * nextEvolve.min);
            let firstEvolveMax = Math.round(this.state.value * nextEvolve.max);
             buffer.push(
                <CpCal
                key='1'
                from={nextEvolve.name}
                to={pokedex[this.state.selected.nextEvolve].name}
                min={firstEvolveMin}
                max={firstEvolveMax}/>
            );
            if (typeof pokedex[this.state.selected.nextEvolve].nextEvolve !== 'undefined') {
                let nextEvolve = pokedex[this.state.selected.nextEvolve];
                buffer.push(<CpCal
                    key='2'
                    from={nextEvolve.name}
                    to={pokedex[nextEvolve.nextEvolve].name}
                    min={Math.round(firstEvolveMin * nextEvolve.min)}
                    max={Math.round(firstEvolveMax * nextEvolve.max)}/>)
            }
        } else {
            for (let i in this.state.selected.nextEvolve) {
                if (true) {
                    buffer.push(<CpCal
                        key={this.pokeid}
                        from={this.state.selected.name}
                        to={pokedex[this.state.selected.nextEvolve[i]].name}
                        min={Math.round(this.state.value * pokedex[this.state.selected.nextEvolve[i]].min)}
                        max={Math.round(this.state.value * pokedex[this.state.selected.nextEvolve[i]].max)}/>
                    );
                }
            }
        }
        return buffer;
    },
    render () {
        let options = this.getOptionsFromPokedex();

        return (
            <AppFrame>
                    <select onChange={this.updateSelected}>
                    {options}
                    </select>
                    
                        <CpTag
                        name={this.state.selected.name}
                        value={this.state.value}
                        onChange={this.changeValue}/>
                    {this.showCpCalc()}
            </AppFrame>
        );
    }
});

const mapStateToProps = ({todo}) => {
    return {
        todos: selectTodos(todo),
    }
};

export default connect(mapStateToProps)(Pokecalc);
