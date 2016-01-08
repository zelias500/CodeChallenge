{% extends 'layout.swig' %}

{% block content %}
  <h1>{{ title }}</h1>
  <p>Welcome to {{ title }}</p>
  <hr />
  {% for event in events %}
  <p>What? {{event.name}}</p>
  <p>When? {{event.date}}</p>
  <p>Who's Going? {{event.attendees}}</p>
  <hr />
  {% endfor %}

{% endblock %}
