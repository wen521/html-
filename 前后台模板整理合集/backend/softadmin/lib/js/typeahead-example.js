$(document).ready(function() {
  $('.typeahead').typeahead({
    name: 'twitter-oss',
    local: [
  {
    "name": "typeahead.js",
    "description": "A fast and fully-featured autocomplete library",
    "language": "JavaScript",
    "value": "typeahead.js",
    "tokens": [
      "typeahead.js",
      "JavaScript"
    ]
  },
  {
    "name": "cassandra",
    "description": "A Ruby client for the Cassandra distributed database",
    "language": "Ruby",
    "value": "cassandra",
    "tokens": [
      "cassandra",
      "Ruby"
    ]
  },
  {
    "name": "hadoop-lzo",
    "description": "Refactored version of code.google.com/hadoop-gpl-compression for hadoop 0.20",
    "language": "Shell",
    "value": "hadoop-lzo",
    "tokens": [
      "hadoop",
      "lzo",
      "Shell",
      "hadoop-lzo"
    ]
  },
  {
    "name": "scribe",
    "description": "A Ruby client library for Scribe",
    "language": "Ruby",
    "value": "scribe",
    "tokens": [
      "scribe",
      "Ruby"
    ]
  },
  {
    "name": "thrift_client",
    "description": "A Thrift client wrapper that encapsulates some common failover behavior",
    "language": "Ruby",
    "value": "thrift_client",
    "tokens": [
      "thrift",
      "client",
      "Ruby",
      "thrift_client"
    ]
  },
  {
    "name": "mustache.js",
    "description": "Minimal templating with {{mustaches}} in JavaScript",
    "language": "JavaScript",
    "value": "mustache.js",
    "tokens": [
      "mustache.js",
      "JavaScript"
    ]
  },
  {
    "name": "grabby-hands",
    "description": "A JVM Kestrel client that aggregates queues from multiple servers. Implemented in Scala with Java bindings. In use at Twitter for all JVM Search and Streaming Kestrel interactions.",
    "language": "Scala",
    "value": "grabby-hands",
    "tokens": [
      "grabby",
      "hands",
      "Scala",
      "grabby-hands"
    ]
  },
  {
    "name": "gizzard",
    "description": "A flexible sharding framework for creating eventually-consistent distributed datastores",
    "language": "Scala",
    "value": "gizzard",
    "tokens": [
      "gizzard",
      "Scala"
    ]
  },
  {
    "name": "thrift",
    "description": "Twitter's out-of-date, forked thrift",
    "language": "C++",
    "value": "thrift",
    "tokens": [
      "thrift",
      "C++"
    ]
  },
  {
    "name": "flockdb",
    "description": "A distributed, fault-tolerant graph database",
    "language": "Scala",
    "value": "flockdb",
    "tokens": [
      "flockdb",
      "Scala"
    ]
  },
  {
    "name": "flockdb-client",
    "description": "A Ruby client library for FlockDB",
    "language": "Ruby",
    "value": "flockdb-client",
    "tokens": [
      "flockdb",
      "client",
      "Ruby",
      "flockdb-client"
    ]
  },
  {
    "name": "standard-project",
    "description": "A slightly more standard sbt project plugin library ",
    "language": "Scala",
    "value": "standard-project",
    "tokens": [
      "standard",
      "project",
      "Scala",
      "standard-project"
    ]
  },
  {
    "name": "snowflake",
    "description": "Snowflake is a network service for generating unique ID numbers at high scale with some simple guarantees.",
    "language": "Scala",
    "value": "snowflake",
    "tokens": [
      "snowflake",
      "Scala"
    ]
  },
  {
    "name": "haplocheirus",
    "description": "A Redis-backed storage engine for timelines",
    "language": "Scala",
    "value": "haplocheirus",
    "tokens": [
      "haplocheirus",
      "Scala"
    ]
  },
  {
    "name": "gizzmo",
    "description": "A command-line client for Gizzard",
    "language": "Ruby",
    "value": "gizzmo",
    "tokens": [
      "gizzmo",
      "Ruby"
    ]
  },
  {
    "name": "scala-zookeeper-client",
    "description": "A Scala client library for ZooKeeper",
    "language": "Scala",
    "value": "scala-zookeeper-client",
    "tokens": [
      "scala",
      "zookeeper",
      "client",
      "Scala",
      "scala-zookeeper-client"
    ]
  },
  {
    "name": "rpc-client",
    "description": "A scala library that encapsulates RPC communications.",
    "language": "Scala",
    "value": "rpc-client",
    "tokens": [
      "rpc",
      "client",
      "Scala",
      "rpc-client"
    ]
  },
  {
    "name": "twitcher",
    "description": "A tool for executing scripts when ZooKeeper nodes change.",
    "language": "Python",
    "value": "twitcher",
    "tokens": [
      "twitcher",
      "Python"
    ]
  },
  {
    "name": "killdeer",
    "description": "Killdeer is a simple server for replaying a sample of responses to sythentically recreate production response characteristics.",
    "language": "Scala",
    "value": "killdeer",
    "tokens": [
      "killdeer",
      "Scala"
    ]
  },
  {
    "name": "ostrich",
    "description": "A stats collector & reporter for Scala servers",
    "language": "Scala",
    "value": "ostrich",
    "tokens": [
      "ostrich",
      "Scala"
    ]
  },
  {
    "name": "rubyenterpriseedition187-248",
    "description": "Twitter's updates to Ruby Enterprise Edition, itself based on MRI 1.8.7-p248",
    "language": "Ruby",
    "value": "rubyenterpriseedition187-248",
    "tokens": [
      "rubyenterpriseedition187",
      "248",
      "Ruby",
      "rubyenterpriseedition187-248"
    ]
  },
  {
    "name": "scala_school",
    "description": "Lessons in the Fundamentals of Scala",
    "language": "Scala",
    "value": "scala_school",
    "tokens": [
      "scala",
      "school",
      "Scala",
      "scala_school"
    ]
  },
  {
    "name": "querulous",
    "description": "An agreeable way to talk to your database",
    "language": "Scala",
    "value": "querulous",
    "tokens": [
      "querulous",
      "Scala"
    ]
  },
  {
    "name": "xrayspecs",
    "description": "extensions to scala specs",
    "language": "Scala",
    "value": "xrayspecs",
    "tokens": [
      "xrayspecs",
      "Scala"
    ]
  },
  {
    "name": "kestrel-client",
    "description": "A Kestrel client library for Ruby",
    "language": "Ruby",
    "value": "kestrel-client",
    "tokens": [
      "kestrel",
      "client",
      "Ruby",
      "kestrel-client"
    ]
  },
  {
    "name": "finagle",
    "description": "A fault tolerant, protocol-agnostic RPC system",
    "language": "Scala",
    "value": "finagle",
    "tokens": [
      "finagle",
      "Scala"
    ]
  },
  {
    "name": "naggati2",
    "description": "Protocol builder for netty using scala",
    "language": "Scala",
    "value": "naggati2",
    "tokens": [
      "naggati2",
      "Scala"
    ]
  },
  {
    "name": "twitter-text-conformance",
    "description": "Conformance testing data for the twitter-text-* repositories",
    "language": null,
    "value": "twitter-text-conformance",
    "tokens": [
      "twitter",
      "text",
      "conformance",
      "twitter-text-conformance"
    ]
  },
  {
    "name": "twitter-text-rb",
    "description": "A library that does auto linking and extraction of usernames, lists and hashtags in tweets",
    "language": "Ruby",
    "value": "twitter-text-rb",
    "tokens": [
      "twitter",
      "text",
      "rb",
      "Ruby",
      "twitter-text-rb"
    ]
  },
  {
    "name": "twitter-text-java",
    "description": "A Java implementation of Twitter's text processing library",
    "language": "Java",
    "value": "twitter-text-java",
    "tokens": [
      "twitter",
      "text",
      "java",
      "Java",
      "twitter-text-java"
    ]
  },
  {
    "name": "twitter-text-js",
    "description": "A JavaScript implementation of Twitter's text processing library",
    "language": "JavaScript",
    "value": "twitter-text-js",
    "tokens": [
      "twitter",
      "text",
      "js",
      "JavaScript",
      "twitter-text-js"
    ]
  },
  {
    "name": "joauth",
    "description": "A Scala library for authenticating HTTP Requests using OAuth",
    "language": "Scala",
    "value": "joauth",
    "tokens": [
      "joauth",
      "Scala"
    ]
  },
  {
    "name": "schmemcached",
    "description": "A prototype implementation of a Memcached client & server in Scala using Finagle",
    "language": "Scala",
    "value": "schmemcached",
    "tokens": [
      "schmemcached",
      "Scala"
    ]
  },
  {
    "name": "chainsaw",
    "description": "A thin Scala wrapper for SLF4J",
    "language": "Scala",
    "value": "chainsaw",
    "tokens": [
      "chainsaw",
      "Scala"
    ]
  },
  {
    "name": "streamyj",
    "description": "Scala sugar for the Jackson JSON parser",
    "language": "Scala",
    "value": "streamyj",
    "tokens": [
      "streamyj",
      "Scala"
    ]
  },
  {
    "name": "cloudhopper-commons-util",
    "description": "The ch-commons-util package contains common utility classes for Cloudhopper-based Java projects.",
    "language": "Java",
    "value": "cloudhopper-commons-util",
    "tokens": [
      "cloudhopper",
      "commons",
      "util",
      "Java",
      "cloudhopper-commons-util"
    ]
  },
  {
    "name": "twitter.github.com",
    "description": "A listing of open source efforts at Twitter on GitHub",
    "language": "JavaScript",
    "value": "twitter.github.com",
    "tokens": [
      "twitter.github.com",
      "JavaScript"
    ]
  },
  {
    "name": "time_constants",
    "description": "Time constants, in seconds, so you don't have to use slow ActiveSupport helpers",
    "language": "Ruby",
    "value": "time_constants",
    "tokens": [
      "time",
      "constants",
      "Ruby",
      "time_constants"
    ]
  },
  {
    "name": "commons",
    "description": "Twitter common libraries for python and the JVM",
    "language": "Java",
    "value": "commons",
    "tokens": [
      "commons",
      "Java"
    ]
  },
  {
    "name": "scala-bootstrapper",
    "description": "initial setup for a scala library or server, using sbt",
    "language": "Ruby",
    "value": "scala-bootstrapper",
    "tokens": [
      "scala",
      "bootstrapper",
      "Ruby",
      "scala-bootstrapper"
    ]
  },
  {
    "name": "sbt-thrift",
    "description": "sbt rules for generating source stubs out of thrift IDLs, for java & scala",
    "language": "Ruby",
    "value": "sbt-thrift",
    "tokens": [
      "sbt",
      "thrift",
      "Ruby",
      "sbt-thrift"
    ]
  },
  {
    "name": "cloudhopper-smpp",
    "description": "Efficient, scalable, and flexible Java implementation of the Short Messaging Peer to Peer Protocol (SMPP)",
    "language": "Java",
    "value": "cloudhopper-smpp",
    "tokens": [
      "cloudhopper",
      "smpp",
      "Java",
      "cloudhopper-smpp"
    ]
  },
  {
    "name": "cloudhopper-commons-charset",
    "description": "Java utility classes for converting between charsets (mostly \"mobile\" in nature) such as Unicode to GSM-7/GSM-8 and vice versa.",
    "language": "Java",
    "value": "cloudhopper-commons-charset",
    "tokens": [
      "cloudhopper",
      "commons",
      "charset",
      "Java",
      "cloudhopper-commons-charset"
    ]
  },
  {
    "name": "cloudhopper-commons-gsm",
    "description": "Java utility classes for working with GSM mobile technologies such as SMS and MMS.",
    "language": "Java",
    "value": "cloudhopper-commons-gsm",
    "tokens": [
      "cloudhopper",
      "commons",
      "gsm",
      "Java",
      "cloudhopper-commons-gsm"
    ]
  },
  {
    "name": "util",
    "description": "Wonderful reusable code from Twitter",
    "language": "Scala",
    "value": "util",
    "tokens": [
      "util",
      "Scala"
    ]
  },
  {
    "name": "Rowz",
    "description": "A sample gizzard application",
    "language": "Scala",
    "value": "Rowz",
    "tokens": [
      "rowz",
      "Scala"
    ]
  },
  {
    "name": "scala-json",
    "description": "Scala JSON toolkit. Originally from the Odersky \"Stairway\" Book, tightened up and tests added by Twitter",
    "language": "Scala",
    "value": "scala-json",
    "tokens": [
      "scala",
      "json",
      "Scala",
      "scala-json"
    ]
  },
  {
    "name": "twui",
    "description": "A UI framework for Mac based on Core Animation",
    "language": "Objective-C",
    "value": "twui",
    "tokens": [
      "twui",
      "Objective-C"
    ]
  },
  {
    "name": "bootstrap",
    "description": "Sleek, intuitive, and powerful front-end framework for faster and easier web development.",
    "language": "JavaScript",
    "value": "bootstrap",
    "tokens": [
      "bootstrap",
      "JavaScript"
    ]
  },
  {
    "name": "scrooge-runtime",
    "description": "Runtime classes for scrooge-generated Thrift code",
    "language": "Scala",
    "value": "scrooge-runtime",
    "tokens": [
      "scrooge",
      "runtime",
      "Scala",
      "scrooge-runtime"
    ]
  },
  {
    "name": "sbt-scrooge",
    "description": "An SBT plugin that adds a mixin for doing Thrift code auto-generation during your compile phase",
    "language": "Scala",
    "value": "sbt-scrooge",
    "tokens": [
      "sbt",
      "scrooge",
      "Scala",
      "sbt-scrooge"
    ]
  },
  {
    "name": "scrooge",
    "description": "A Thrift generator for Scala",
    "language": "Scala",
    "value": "scrooge",
    "tokens": [
      "scrooge",
      "Scala"
    ]
  },
  {
    "name": "webrat",
    "description": "Webrat - Ruby Acceptance Testing for Web applications",
    "language": "Ruby",
    "value": "webrat",
    "tokens": [
      "webrat",
      "Ruby"
    ]
  },
  {
    "name": "twemperf",
    "description": "A tool for measuring memcached server performance",
    "language": "C",
    "value": "twemperf",
    "tokens": [
      "twemperf",
      "C"
    ]
  },
  {
    "name": "pycascading",
    "description": "A Python wrapper for Cascading",
    "language": "Python",
    "value": "pycascading",
    "tokens": [
      "pycascading",
      "Python"
    ]
  },
  {
    "name": "hogan.js",
    "description": "A compiler for the Mustache templating language",
    "language": "JavaScript",
    "value": "hogan.js",
    "tokens": [
      "hogan.js",
      "JavaScript"
    ]
  },
  {
    "name": "mysql",
    "description": "MySQL fork maintained and used at Twitter",
    "language": "C",
    "value": "mysql",
    "tokens": [
      "mysql",
      "C"
    ]
  },
  {
    "name": "scalding",
    "description": "A Scala API for Cascading",
    "language": "Scala",
    "value": "scalding",
    "tokens": [
      "scalding",
      "Scala"
    ]
  },
  {
    "name": "cassie",
    "description": "A Scala client for Cassandra",
    "language": "Scala",
    "value": "cassie",
    "tokens": [
      "cassie",
      "Scala"
    ]
  },
  {
    "name": "effectivescala",
    "description": "Twitter's Effective Scala Guide",
    "language": "Shell",
    "value": "effectivescala",
    "tokens": [
      "effectivescala",
      "Shell"
    ]
  },
  {
    "name": "twitterActors",
    "description": "Improved Scala actors library; used internally at Twitter",
    "language": "Scala",
    "value": "twitterActors",
    "tokens": [
      "twitteractors",
      "Scala"
    ]
  },
  {
    "name": "mahout",
    "description": "Twitter's fork of Apache Mahout (we intend to push changes upstream)",
    "language": "Java",
    "value": "mahout",
    "tokens": [
      "mahout",
      "Java"
    ]
  },
  {
    "name": "cassovary",
    "description": "Cassovary is a simple big graph processing library for the JVM",
    "language": "Scala",
    "value": "cassovary",
    "tokens": [
      "cassovary",
      "Scala"
    ]
  },
  {
    "name": "twemproxy",
    "description": "A fast, light-weight proxy for memcached and redis",
    "language": "C",
    "value": "twemproxy",
    "tokens": [
      "twemproxy",
      "C"
    ]
  },
  {
    "name": "jvmgcprof",
    "description": "A simple utility for profile allocation and garbage collection activity in the JVM",
    "language": "C",
    "value": "jvmgcprof",
    "tokens": [
      "jvmgcprof",
      "C"
    ]
  },
  {
    "name": "twitter-cldr-rb",
    "description": "Ruby implementation of the ICU (International Components for Unicode) that uses the Common Locale Data Repository to format dates, plurals, and more.",
    "language": "Ruby",
    "value": "twitter-cldr-rb",
    "tokens": [
      "twitter",
      "cldr",
      "rb",
      "Ruby",
      "twitter-cldr-rb"
    ]
  },
  {
    "name": "bootstrap-server",
    "description": "The node server that powers the bootstrap customize page",
    "language": "JavaScript",
    "value": "bootstrap-server",
    "tokens": [
      "bootstrap",
      "server",
      "JavaScript",
      "bootstrap-server"
    ]
  },
  {
    "name": "sbt-package-dist",
    "description": "sbt 11 plugin codifying best practices for building, packaging, and publishing",
    "language": "Scala",
    "value": "sbt-package-dist",
    "tokens": [
      "sbt",
      "package",
      "dist",
      "Scala",
      "sbt-package-dist"
    ]
  },
  {
    "name": "ospriet",
    "description": "An example audience moderation app built on Twitter",
    "language": "JavaScript",
    "value": "ospriet",
    "tokens": [
      "ospriet",
      "JavaScript"
    ]
  },
  {
    "name": "innovators-patent-agreement",
    "description": "Innovators Patent Agreement (IPA)",
    "language": null,
    "value": "innovators-patent-agreement",
    "tokens": [
      "innovators",
      "patent",
      "agreement",
      "innovators-patent-agreement"
    ]
  },
  {
    "name": "recess",
    "description": "A simple and attractive code quality tool for CSS built on top of LESS",
    "language": "JavaScript",
    "value": "recess",
    "tokens": [
      "recess",
      "JavaScript"
    ]
  },
  {
    "name": "ambrose",
    "description": "A platform for visualization and real-time monitoring of data workflows",
    "language": "JavaScript",
    "value": "ambrose",
    "tokens": [
      "ambrose",
      "JavaScript"
    ]
  },
  {
    "name": "twitter-text-objc",
    "description": "An Objective-C implementation of Twitter's text processing library",
    "language": "Objective-C",
    "value": "twitter-text-objc",
    "tokens": [
      "twitter",
      "text",
      "objc",
      "Objective-C",
      "twitter-text-objc"
    ]
  },
  {
    "name": "activerecord-reputation-system",
    "description": "An Active Record Reputation System for Rails",
    "language": "Ruby",
    "value": "activerecord-reputation-system",
    "tokens": [
      "activerecord",
      "reputation",
      "system",
      "Ruby",
      "activerecord-reputation-system"
    ]
  },
  {
    "name": "twitter4j",
    "description": "Twitter4J is an open-sourced, mavenized and Google App Engine safe Java library for the Twitter API which is released under the APL 2.0.",
    "language": "Java",
    "value": "twitter4j",
    "tokens": [
      "twitter4j",
      "Java"
    ]
  },
  {
    "name": "zipkin",
    "description": "Zipkin is a distributed tracing system",
    "language": "Scala",
    "value": "zipkin",
    "tokens": [
      "zipkin",
      "Scala"
    ]
  },
  {
    "name": "elephant-twin",
    "description": "Elephant Twin is a framework for creating indexes in Hadoop",
    "language": "Java",
    "value": "elephant-twin",
    "tokens": [
      "elephant",
      "twin",
      "Java",
      "elephant-twin"
    ]
  },
  {
    "name": "elephant-twin-lzo",
    "description": "Elephant Twin LZO uses Elephant Twin to create LZO block indexes",
    "language": "Java",
    "value": "elephant-twin-lzo",
    "tokens": [
      "elephant",
      "twin",
      "lzo",
      "Java",
      "elephant-twin-lzo"
    ]
  },
  {
    "name": "iago",
    "description": "A load generator, built for engineers",
    "language": "Scala",
    "value": "iago",
    "tokens": [
      "iago",
      "Scala"
    ]
  },
  {
    "name": "twemcache",
    "description": "Twemcache is the Twitter Memcached",
    "language": "C",
    "value": "twemcache",
    "tokens": [
      "twemcache",
      "C"
    ]
  },
  {
    "name": "twitter-cldr-js",
    "description": "JavaScript implementation of the ICU (International Components for Unicode) that uses the Common Locale Data Repository to format dates, plurals, and more.  Based on twitter-cldr-rb.",
    "language": "JavaScript",
    "value": "twitter-cldr-js",
    "tokens": [
      "twitter",
      "cldr",
      "js",
      "JavaScript",
      "twitter-cldr-js"
    ]
  },
  {
    "name": "algebird",
    "description": "Abstract Algebra for Scala",
    "language": "Scala",
    "value": "algebird",
    "tokens": [
      "algebird",
      "Scala"
    ]
  },
  {
    "name": "hdfs-du",
    "description": "Visualize your HDFS cluster usage",
    "language": "JavaScript",
    "value": "hdfs-du",
    "tokens": [
      "hdfs",
      "du",
      "JavaScript",
      "hdfs-du"
    ]
  },
  {
    "name": "clockworkraven",
    "description": "Human-Powered Data Analysis with Mechanical Turk",
    "language": "Ruby",
    "value": "clockworkraven",
    "tokens": [
      "clockworkraven",
      "Ruby"
    ]
  },
  {
    "name": "jerkson",
    "description": "The Scala applewood bacon to Jackson's chicken breast: JSON cordon bleu.",
    "language": "Scala",
    "value": "jerkson",
    "tokens": [
      "jerkson",
      "Scala"
    ]
  },
  {
    "name": "bower-server",
    "description": "The Bower Server",
    "language": "Ruby",
    "value": "bower-server",
    "tokens": [
      "bower",
      "server",
      "Ruby",
      "bower-server"
    ]
  },
  {
    "name": "bower",
    "description": "A package manager for the web",
    "language": "JavaScript",
    "value": "bower",
    "tokens": [
      "bower",
      "JavaScript"
    ]
  },
  {
    "name": "twitter-cldr-npm",
    "description": "TwitterCldr npm package",
    "language": "JavaScript",
    "value": "twitter-cldr-npm",
    "tokens": [
      "twitter",
      "cldr",
      "npm",
      "JavaScript",
      "twitter-cldr-npm"
    ]
  },
  {
    "name": "tormenta",
    "description": "Scala extensions for Storm",
    "language": "Scala",
    "value": "tormenta",
    "tokens": [
      "tormenta",
      "Scala"
    ]
  },
  {
    "name": "sprockets-commonjs-twitter",
    "description": "Adds CommonJS support to Sprockets",
    "language": "JavaScript",
    "value": "sprockets-commonjs-twitter",
    "tokens": [
      "sprockets",
      "commonjs",
      "twitter",
      "JavaScript",
      "sprockets-commonjs-twitter"
    ]
  },
  {
    "name": "scalding-commons",
    "description": "Common extensions to the Scalding MapReduce DSL.",
    "language": "Scala",
    "value": "scalding-commons",
    "tokens": [
      "scalding",
      "commons",
      "Scala",
      "scalding-commons"
    ]
  },
  {
    "name": "captured",
    "description": "Quick screen capture sharing utility for Mac OS X.",
    "language": "Ruby",
    "value": "captured",
    "tokens": [
      "captured",
      "Ruby"
    ]
  },
  {
    "name": "chill",
    "description": "Scala extensions for the Kryo serialization library",
    "language": "Scala",
    "value": "chill",
    "tokens": [
      "chill",
      "Scala"
    ]
  },
  {
    "name": "bookkeeper",
    "description": "Twitter's fork of Apache BookKeeper (will push changes upstream eventually)",
    "language": "Java",
    "value": "bookkeeper",
    "tokens": [
      "bookkeeper",
      "Java"
    ]
  },
  {
    "name": "secureheaders",
    "description": "Security related headers all in one gem",
    "language": "Ruby",
    "value": "secureheaders",
    "tokens": [
      "secureheaders",
      "Ruby"
    ]
  },
  {
    "name": "RTLtextarea",
    "description": "Automatically detects RTL and configures a text input",
    "language": "JavaScript",
    "value": "RTLtextarea",
    "tokens": [
      "rtltextarea",
      "JavaScript"
    ]
  },
  {
    "name": "bijection",
    "description": "Reversible conversions between types",
    "language": "Scala",
    "value": "bijection",
    "tokens": [
      "bijection",
      "Scala"
    ]
  },
  {
    "name": "fatcache",
    "description": "Memcache on SSD",
    "language": "C",
    "value": "fatcache",
    "tokens": [
      "fatcache",
      "C"
    ]
  },
  {
    "name": "rails",
    "description": "Ruby on Rails",
    "language": "Ruby",
    "value": "rails",
    "tokens": [
      "rails",
      "Ruby"
    ]
  },
  {
    "name": "flight",
    "description": "A lightweight, component-based JavaScript framework",
    "language": "JavaScript",
    "value": "flight",
    "tokens": [
      "flight",
      "JavaScript"
    ]
  }
],
    template: [
      '<p class="repo-language">{{language}}</p>',
      '<p class="repo-name">{{name}}</p>',
      '<p class="repo-description">{{description}}</p>'
    ].join(''),
    engine: Hogan
  });
});