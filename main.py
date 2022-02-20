import streamlit as st
import streamlit.components.v1 as components
from streamlit_echarts import st_echarts
from pyecharts import options as opts
from pyecharts.charts import Bar
from streamlit_echarts import st_pyecharts




def set_bg_hack(main_bg=None):
    st.markdown("""
    <style>
    .sidebar .sidebar-content {
        background-image: linear-gradient(#2e7bcf,#2e7bcf);
        color: white;
    }
    </style>
    """,unsafe_allow_html=True)

set_bg_hack()

_cards_func = components.declare_component(
    "my_component",
    url="http://localhost:3001",
)

def card(name, key=None, numero='', frase='', icono='',spin=False):
    component_value = _cards_func(name=name, key=key, default=0, \
                                      numero=numero, frase=frase, icono=icono, spin=spin)
    return component_value


# st.set_page_config(layout="wide")

add_selectbox = st.sidebar.selectbox(
    "How would you like to be contacted?",
    ("Email", "Home phone", "Mobile phone")
 )

col1, col2, col3 = st.columns(3)

st.subheader("Component with constant args")
with col1:
    card("KS", numero=30, frase='KS', icono="chart-pie",spin=False)
with col2:
    card("Gini", numero=40, frase='Gini', icono="chart-bar",spin=False)
with col3:
    card("Variables", numero=21, frase='Variables', icono="circle-notch",spin=True)

options = {
    "xAxis": {
        "type": "category",
        "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    "yAxis": {"type": "value"},
    "series": [
        {"data": [820, 932, 901, 934, 1290, 1330, 1320], "type": "line"}
    ],
}
st_echarts(options=options)

b = (
    Bar()
        .add_xaxis(["Microsoft", "Amazon", "IBM", "Oracle", "Google", "Alibaba"])
        .add_yaxis(
        "2017-2018 Revenue in (billion $)", [21.2, 20.4, 10.3, 6.08, 4, 2.2]
    )
        .set_global_opts(
        title_opts=opts.TitleOpts(
            title="Top cloud providers 2018", subtitle="2017-2018 Revenue"
        ),
        toolbox_opts=opts.ToolboxOpts(),
    )
)
st_pyecharts(b)

'''
# print(num_clicks)
# st.markdown("You've clicked %s times!" % int(num_clicks))
st.markdown("---")
st.subheader("Component with variable args")
name_input = st.text_input("Enter a name", value="Streamlit")
num_clicks = my_component(name_input, key="foo")
st.markdown("You've clicked %s times!" % int(num_clicks))
'''
