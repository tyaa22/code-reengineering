const dispen = {
    title: "Dispensables",
    txt: "Hal - hal tidak penting yang dapat menurunkan kualitas kode yang dihasilkan. Refactoring dilakukan untuk membuat kode menjadi lebih rapi, efisien, dan mudah untuk dimengerti.",
    route: "/dispensables",
    types: [
        {
            id: 0,
            title: "Comments",
            desc: "Comments digunakan untuk menjelaskan maksud dan fungsi dari sebuah kode. Comments dapat membuat kode terlihat 'bulky' dan sulit untuk dibaca. Lebih baik menamai kelas, method, dan variable dengan jelas untuk menghindari kebingungan dan comments.",
            treatment: "Untuk menghilangkan comments, dapat dilakukan Extract Variable, Extract Method, Rename Method, dan Introduce Assertion.",
            codebefore: ``,
            codeafter: ``
        },
        {
            id: 1,
            title: "Duplicate Code",
            desc: "Duplicate Code merupakan kondisi dimana beberapa potongan dari kode terlihat sama atau melakukan fungsi yang sama. Hal ini dapat terjadi karena kurangnya code abstraction, copy-paste programming, dan kurangnya komunikasi antara developers. Duplicate seharusnya dihindari karena menyalahi prinsip DRY.",
            treatment: "Untuk menghilangkan Duplicate Code, dapat dilakukan Extract Method, Extract Superclass, Extract Class, Consolidate Conditional Expressions, Form Template Method, dan Substitute Algorithm.",
            codebefore: ``,
            codeafter: ``
        },
        {
            id: 2,
            title: "Lazy Class",
            desc: "Lazy Class merupakan kelas tanpa value atau tujuan yang jelas sehingga kelas tersebut lebih baik dihilangkan. Dengan menghilangkan Lazy Class, kode menjadi lebih jelas dan mudah untuk di-maintain.",
            treatment: "Untuk menghilangkan Lazy Class, dapat dilakukan Collapse Hierarchy dan Inline Class.",
            codebefore: ``,
            codeafter: ``
        },
        {
            id: 3,
            title: "Data Class",
            desc: "Data Class merupakan kelas yang hanya memiliki fields dan getters-setters. Kelas ini hanya berupa penampung untuk data yang digunakan oleh kelas lain dan tidak dapat mengolah sendiri data yang mereka tampung. Biasanya data class tercipta karena kurangnya enkapsulasi.",
            treatment: "Untuk menghilangkan Data Class, dapat dilakukan Encapsulation, Move Method, Extract method, Remove Setting Method, dan Hide Method.",
            codebefore: ``,
            codeafter: ``
        },
        {
            id: 4,
            title: "Dead Code",
            desc: "Dead Code dapat berupa variable, parameter, field, method, atau class yang tidak digunakan lagi. Hal ini biasa disebabkan perubahan requirements atau refactoring. Dead code sebaiknya dihilangkan untuk mengurangi ukuran kode dan membuat kode lebih mudah dipahami.",
            treatment: "Untuk menghilangkan Dead Code, dapat dilakukan penghapusan kode dan file yang sudah tidak digunakan, Inline Class, Collapse Hierarchy, dan Remove Parameter.",
            codebefore: ``,
            codeafter: ``
        },
        {
            id: 5,
            title: "Speculative Generality",
            desc: "Speculative Generality mirip dengan Dead Code. Perbedaannya adalah jika Dead Code merupakan kode lama yang tidak digunakan lagi, Speculative Generality merupakan kode yang diciptakan untuk fitur yang akan datang namun pada akhirnya tidak pernah diimplementasikan.",
            treatment: "Untuk menghilangkan Speculative Generailty, dapat dilakukan penghapusan kode yang tidak digunakan, Collapse Hierarchy, Inline Class, Inline Method, dan Remove Parameter.",
            codebefore: ``,
            codeafter: ``
        }
    ]
}

export default dispen;