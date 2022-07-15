import './tree-list';
import './tree-list-item';
export default {
    title: 'Components/Tree List',
    parameters: {
        layout: 'centered',
    }
}

export const TreeList = ({}) => {
    return `
        <td-tree-list>
            <td-tree-list-item>
                <div slot="content">1</div>
                <td-tree-list-item slot="nest">
                    <div slot="content">1a</div>
                    <td-tree-list-item slot="nest">
                        <div slot="content">1b</div>
                        <td-tree-list-item slot="nest">
                            <div slot="content">1bi</div>
                        </td-tree-list-item>
                    </td-tree-list-item>
                    <td-tree-list-item slot="nest">
                        <div slot="content">1c</div>
                    </td-tree-list-item>
                    <td-tree-list-item slot="nest">
                        <div slot="content">1d</div>
                    </td-tree-list-item>
                </td-tree-list-item>
            </td-tree-list-item>
        </td-tree-list>
    `
}