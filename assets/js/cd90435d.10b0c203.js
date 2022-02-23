"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3909],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=c(r),d=a,m=y["".concat(l,".").concat(d)]||y[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},64040:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return y}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={title:"Async Queries via Celery",hide_title:!0,sidebar_position:8,version:1},l=void 0,c={unversionedId:"installation/async-queries-celery",id:"installation/async-queries-celery",title:"Async Queries via Celery",description:"Async Queries via Celery",source:"@site/docs/installation/async-queries-celery.mdx",sourceDirName:"installation",slug:"/installation/async-queries-celery",permalink:"/docs/installation/async-queries-celery",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/installation/async-queries-celery.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Async Queries via Celery",hide_title:!0,sidebar_position:8,version:1},sidebar:"tutorialSidebar",previous:{title:"Upgrading Superset",permalink:"/docs/installation/upgrading-superset"},next:{title:"Alerts and Reports",permalink:"/docs/installation/alerts-reports"}},p=[{value:"Async Queries via Celery",id:"async-queries-via-celery",children:[{value:"Celery",id:"celery",children:[],level:3},{value:"Celery Flower",id:"celery-flower",children:[],level:3}],level:2}],u={toc:p};function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"async-queries-via-celery"},"Async Queries via Celery"),(0,o.kt)("h3",{id:"celery"},"Celery"),(0,o.kt)("p",null,"On large analytic databases, it\u2019s common to run queries that execute for minutes or hours. To enable\nsupport for long running queries that execute beyond the typical web request\u2019s timeout (30-60\nseconds), it is necessary to configure an asynchronous backend for Superset which consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"one or many Superset workers (which is implemented as a Celery worker), and can be started with\nthe ",(0,o.kt)("inlineCode",{parentName:"li"},"celery worker")," command, run ",(0,o.kt)("inlineCode",{parentName:"li"},"celery worker --help")," to view the related options."),(0,o.kt)("li",{parentName:"ul"},"a celery broker (message queue) for which we recommend using Redis or RabbitMQ"),(0,o.kt)("li",{parentName:"ul"},"a results backend that defines where the worker will persist the query results")),(0,o.kt)("p",null,"Configuring Celery requires defining a ",(0,o.kt)("inlineCode",{parentName:"p"},"CELERY_CONFIG")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py"),". Both the worker\nand web server processes should have the same configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class CeleryConfig(object):\n    BROKER_URL = 'redis://localhost:6379/0'\n    CELERY_IMPORTS = (\n        'superset.sql_lab',\n        'superset.tasks',\n    )\n    CELERY_RESULT_BACKEND = 'redis://localhost:6379/0'\n    CELERYD_LOG_LEVEL = 'DEBUG'\n    CELERYD_PREFETCH_MULTIPLIER = 10\n    CELERY_ACKS_LATE = True\n    CELERY_ANNOTATIONS = {\n        'sql_lab.get_sql_results': {\n            'rate_limit': '100/s',\n        },\n        'email_reports.send': {\n            'rate_limit': '1/s',\n            'time_limit': 120,\n            'soft_time_limit': 150,\n            'ignore_result': True,\n        },\n    }\n    CELERYBEAT_SCHEDULE = {\n        'email_reports.schedule_hourly': {\n            'task': 'email_reports.schedule_hourly',\n            'schedule': crontab(minute=1, hour='*'),\n        },\n    }\n\nCELERY_CONFIG = CeleryConfig\n")),(0,o.kt)("p",null,"To start a Celery worker to leverage the configuration, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"celery --app=superset.tasks.celery_app:app worker --pool=prefork -O fair -c 4\n")),(0,o.kt)("p",null,"To start a job which schedules periodic background jobs, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"celery --app=superset.tasks.celery_app:app beat\n")),(0,o.kt)("p",null,"To setup a result backend, you need to pass an instance of a derivative of from\ncachelib.base.BaseCache to the RESULTS_BACKEND configuration key in your superset_config.py. You can\nuse Memcached, Redis, S3 (",(0,o.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/s3werkzeugcache"},"https://pypi.python.org/pypi/s3werkzeugcache"),"), memory or the file system\n(in a single server-type setup or for testing), or to write your own caching interface. Your\n",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py")," may look something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# On S3\nfrom s3cache.s3cache import S3Cache\nS3_CACHE_BUCKET = 'foobar-superset'\nS3_CACHE_KEY_PREFIX = 'sql_lab_result'\nRESULTS_BACKEND = S3Cache(S3_CACHE_BUCKET, S3_CACHE_KEY_PREFIX)\n\n# On Redis\nfrom cachelib.redis import RedisCache\nRESULTS_BACKEND = RedisCache(\n    host='localhost', port=6379, key_prefix='superset_results')\n")),(0,o.kt)("p",null,"For performance gains, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/msgpack/msgpack-python"},"MessagePack")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/python/"},"PyArrow")," are now used for results serialization. This can be\ndisabled by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"RESULTS_BACKEND_USE_MSGPACK = False")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"superset_config.py"),", should any\nissues arise. Please clear your existing results cache store when upgrading an existing environment."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important Notes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It is important that all the worker nodes and web servers in the Superset cluster ",(0,o.kt)("em",{parentName:"p"},"share a common\nmetadata database"),". This means that SQLite will not work in this context since it has limited\nsupport for concurrency and typically lives on the local file system.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There should ",(0,o.kt)("em",{parentName:"p"},"only be one instance of celery beat running")," in your entire setup. If not,\nbackground jobs can get scheduled multiple times resulting in weird behaviors like duplicate\ndelivery of reports, higher than expected load / traffic etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SQL Lab will ",(0,o.kt)("em",{parentName:"p"},"only run your queries asynchronously if")," you enable ",(0,o.kt)("strong",{parentName:"p"},"Asynchronous Query Execution"),"\nin your database settings (Sources > Databases > Edit record)."))),(0,o.kt)("h3",{id:"celery-flower"},"Celery Flower"),(0,o.kt)("p",null,"Flower is a web based tool for monitoring the Celery cluster which you can install from pip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install flower\n")),(0,o.kt)("p",null,"You can run flower using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"celery --app=superset.tasks.celery_app:app flower\n")))}y.isMDXComponent=!0}}]);